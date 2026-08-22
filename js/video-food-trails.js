(() => {
  const language = document.documentElement.lang.toLowerCase().startsWith("zh") ? "zh" : "en";
  const favoritesStorageKey = "tasteChinaVideoFoodFavorites";
  const categoryPatterns = {
    staples: /面|粉|饭|粥|饼|包|饺|馍|馄饨|馒头|烧麦|米粿|白粿|饭团|面皮|粉虫|米时|米线|粉丝/,
    breakfast: /早茶|豆浆|豆腐脑|油条|煎饼|包子|蒸饺|锅贴|烧饼|汤|粥|糁|甜沫|嘎巴菜|面茶|炒肝|豆沫/,
    barbecue: /烧烤|烤|炸串|铁板|炸鸡|鸡叉骨|胸口油|板筋|炸全翅|炸鸡翅|大鸡腿|炸鸡腿/,
    seafood: /海鲜|鱼|虾|蟹|蛤|鱿鱼|鳗|鲅|海肠|文蛤|泥螺|香螺|笔管|鱼籽|鱼杂/,
    sweets: /糕|糖|甜|冰|酸奶|咖啡|茶饮|果茶|奶茶|蛋糕|泡芙|大福|豆花|糖水|麻花|酥|月饼|青团|圆子|元宵|汤圆|烧仙草|布丁|奶油/
  };
  const ui = {
    en: {
      routesFound: (routes, foods) => `${routes} city ${routes === 1 ? "menu" : "menus"} · ${foods} pictured food ${foods === 1 ? "match" : "matches"}`,
      cardCount: count => `${count} pictured ${count === 1 ? "food" : "foods"}`,
      openTrail: city => `Open the ${city} food trail`,
      openLabel: "Open city menu",
      savedOnCard: count => `${count} saved`,
      more: count => `+${count} more`,
      dailyLabel: (food, city) => `Open ${city} for ${food}`,
      emptyPicks: "No bites match the current filters.",
      noRandom: "No city matches those filters yet.",
      saved: food => `${food} added to your want-to-eat list.`,
      removed: food => `${food} removed from your want-to-eat list.`,
      saveFood: food => `Save ${food}`,
      removeFood: food => `Remove ${food} from saved foods`,
      flipFood: food => `Flip the food card for ${food}`,
      flipHint: "Flip card",
      unflipFood: food => `Turn the ${food} card back over`,
      exactVisual: source => `Verified dish photo · ${source}`,
      wantToEat: "Want to eat",
      savedLabel: "Saved",
      lucky: food => `Today’s bite: ${food}`
    },
    zh: {
      routesFound: (routes, foods) => `${routes} 份城市食单 · ${foods} 道匹配美食`,
      cardCount: count => `${count} 道有图美食`,
      openTrail: city => `打开${city}觅食路线`,
      openLabel: "查看城市食单",
      savedOnCard: count => `已收藏 ${count} 个`,
      more: count => `另有 ${count} 个`,
      dailyLabel: (food, city) => `打开${city}路线，查看${food}`,
      emptyPicks: "当前筛选下还没有可以抽取的美食。",
      noRandom: "当前筛选下还没有可以抽取的城市。",
      saved: food => `已把${food}放进想吃清单。`,
      removed: food => `已从想吃清单移除${food}。`,
      saveFood: food => `收藏${food}`,
      removeFood: food => `从想吃清单移除${food}`,
      flipFood: food => `翻开${food}食签`,
      flipHint: "翻开食签",
      unflipFood: food => `翻回${food}食签`,
      exactVisual: source => `已核实菜图 · ${source}`,
      wantToEat: "想吃",
      savedLabel: "已想吃",
      lucky: food => `今天就吃：${food}`
    }
  }[language];

  const elements = {
    routeCount: document.getElementById("routeCount"),
    cityCount: document.getElementById("cityCount"),
    foodCount: document.getElementById("foodCount"),
    heroMosaic: document.getElementById("heroMosaic"),
    heroMosaicShuffle: document.getElementById("heroMosaicShuffleBtn"),
    search: document.getElementById("trailSearch"),
    clearSearch: document.getElementById("clearSearchBtn"),
    categories: document.querySelector(".trail-categories"),
    savedFilter: document.getElementById("savedFilterBtn"),
    savedCount: document.getElementById("savedCount"),
    randomCity: document.getElementById("randomCityBtn"),
    heroPick: document.getElementById("heroPickBtn"),
    dailyRoute: document.getElementById("dailyRoute"),
    dailyPicks: document.getElementById("dailyPicks"),
    dailyShuffle: document.getElementById("dailyShuffleBtn"),
    resultsCount: document.getElementById("resultsCount"),
    grid: document.getElementById("trailGrid"),
    empty: document.getElementById("trailEmpty"),
    resetFilters: document.getElementById("resetFiltersBtn"),
    backdrop: document.getElementById("drawerBackdrop"),
    drawer: document.getElementById("trailDrawer"),
    drawerClose: document.getElementById("drawerCloseBtn"),
    drawerRegion: document.getElementById("drawerRegion"),
    drawerCity: document.getElementById("drawerCity"),
    drawerFoodCount: document.getElementById("drawerFoodCount"),
    drawerSavedCount: document.getElementById("drawerSavedCount"),
    drawerLucky: document.getElementById("drawerLuckyBtn"),
    drawerFoods: document.getElementById("drawerFoods"),
    toast: document.getElementById("trailToast")
  };

  if (typeof videoFoodTrailsData === "undefined" || !elements.grid) {
    return;
  }

  let activeCategory = "all";
  let favoritesOnly = false;
  let favorites = loadFavorites();
  let filteredTrails = [];
  let dailySelection = [];
  let activeTrail = null;
  let lastFocusedElement = null;
  let toastTimer = null;
  let randomTimer = null;
  let heroMosaicTimer = null;
  let heroMosaicSources = [];
  let gridRenderToken = 0;
  const trailVisualMaps = new Map();
  const foodVisualCatalog = typeof foodCitiesData === "undefined" ? [] : foodCitiesData.flatMap(city => (
    city.dishes.map(dish => ({
      citySlug: city.slug,
      cityName: city.name,
      name: dish.name,
      normalizedName: normalizeFoodName(dish.name),
      image: `/${dish.image}`,
      credit: dish.credit
    }))
  ));
  const trailMediaCatalog = typeof videoFoodTrailsMediaData === "undefined"
    ? {}
    : videoFoodTrailsMediaData;

  function track(name, data = {}) {
    if (typeof window.va === "function") {
      window.va("event", { name, data });
    }
  }

  function loadFavorites() {
    try {
      const stored = JSON.parse(localStorage.getItem(favoritesStorageKey) || "[]");
      return new Set(Array.isArray(stored) ? stored : []);
    } catch (error) {
      return new Set();
    }
  }

  function persistFavorites() {
    try {
      localStorage.setItem(favoritesStorageKey, JSON.stringify([...favorites]));
    } catch (error) {
      // The page remains usable when browser storage is unavailable.
    }
  }

  function favoriteKey(slug, food) {
    return `${slug}::${food}`;
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, character => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      "\"": "&quot;"
    }[character]));
  }

  function normalizeFoodName(value) {
    return String(value)
      .toLocaleLowerCase()
      .replace(/[·•\s（）()、，,]/g, "");
  }

  function uniqueVisuals(items) {
    const seen = new Set();
    return items.filter(item => {
      if (seen.has(item.image)) {
        return false;
      }
      seen.add(item.image);
      return true;
    });
  }

  function getExactVisuals(trail, food) {
    const normalizedFood = normalizeFoodName(food);
    const exactInCity = foodVisualCatalog.filter(item => (
      item.citySlug === trail.slug && item.normalizedName === normalizedFood
    ));
    const exactAnywhere = foodVisualCatalog.filter(item => item.normalizedName === normalizedFood);
    return uniqueVisuals([...exactInCity, ...exactAnywhere]);
  }

  function buildTrailVisualMap(trail) {
    const visuals = new Map();
    const usedImages = new Set();
    trail.foods.forEach(food => {
      const trailMedia = trailMediaCatalog[trail.slug]?.[food];
      const exactCandidates = getExactVisuals(trail, food);
      const selected = trailMedia
        ? {
            image: `/${trailMedia.image}`,
            name: trailMedia.matchedName[language],
            credit: trailMedia.credit,
            trailSpecific: true
          }
        : exactCandidates.find(item => !usedImages.has(item.image));
      if (selected) {
        usedImages.add(selected.image);
      }
      const visual = selected
        ? { ...selected, exact: true }
        : { image: null, name: null, exact: false };
      visuals.set(food, visual);
    });

    return visuals;
  }

  function getFoodVisual(trail, food) {
    if (!trailVisualMaps.has(trail.slug)) {
      trailVisualMaps.set(trail.slug, buildTrailVisualMap(trail));
    }
    return trailVisualMaps.get(trail.slug).get(food);
  }

  function getPicturedFoods(trail) {
    return trail.foods.filter(food => getFoodVisual(trail, food)?.image);
  }

  function pickHeroMosaic() {
    const selected = [];
    const usedImages = new Set();

    shuffle(videoFoodTrailsData).some(trail => {
      const candidates = shuffle(getPicturedFoods(trail)
        .map(food => ({ trail, food, visual: getFoodVisual(trail, food) }))
        .filter(item => item.visual.trailSpecific && !heroMosaicSources.includes(item.visual.image)));
      const candidate = candidates.find(item => !usedImages.has(item.visual.image));
      if (candidate) {
        selected.push(candidate);
        usedImages.add(candidate.visual.image);
      }
      return selected.length === 4;
    });

    return selected;
  }

  function preloadImage(source) {
    return new Promise(resolve => {
      const image = new Image();
      image.addEventListener("load", resolve, { once: true });
      image.addEventListener("error", resolve, { once: true });
      image.src = source;
    });
  }

  async function shuffleHeroMosaic({ animate = true, trackInteraction = false } = {}) {
    if (!elements.heroMosaic || elements.heroMosaicShuffle?.disabled) {
      return;
    }
    const figures = [...elements.heroMosaic.querySelectorAll("figure")];
    const selection = pickHeroMosaic();
    if (figures.length !== 4 || selection.length !== figures.length) {
      return;
    }

    if (elements.heroMosaicShuffle) {
      elements.heroMosaicShuffle.disabled = true;
      elements.heroMosaicShuffle.classList.add("is-spinning");
    }
    await Promise.all(selection.map(item => preloadImage(item.visual.image)));
    if (animate) {
      elements.heroMosaic.classList.add("is-changing");
      await new Promise(resolve => window.setTimeout(resolve, 170));
    }

    figures.forEach((figure, index) => {
      const item = selection[index];
      figure.dataset.city = item.trail.slug;
      figure.dataset.food = item.food;
      figure.querySelector("img").src = item.visual.image;
    });
    heroMosaicSources = selection.map(item => item.visual.image);
    requestAnimationFrame(() => elements.heroMosaic.classList.remove("is-changing"));
    window.clearTimeout(heroMosaicTimer);
    heroMosaicTimer = window.setTimeout(() => {
      if (elements.heroMosaicShuffle) {
        elements.heroMosaicShuffle.disabled = false;
        elements.heroMosaicShuffle.classList.remove("is-spinning");
      }
    }, animate ? 360 : 0);

    if (trackInteraction) {
      track("city_food_trails_mosaic_shuffle", {
        cities: selection.map(item => item.trail.slug).join(",")
      });
    }
  }

  function renderVisualMedia(visual, { width, height, loading = "" }) {
    const loadingAttribute = loading ? ` loading="${loading}"` : "";
    return `<img src="${escapeHtml(visual.image)}" alt=""${loadingAttribute} decoding="async" width="${width}" height="${height}">`;
  }

  function getCityName(trail) {
    return trail.city[language];
  }

  function getLocationName(trail) {
    return `${trail.province[language]} · ${trail.region[language]}`;
  }

  function matchesCategory(food) {
    return activeCategory === "all" || categoryPatterns[activeCategory].test(food);
  }

  function getFilteredTrails() {
    const query = elements.search.value.trim().toLocaleLowerCase();

    return videoFoodTrailsData.reduce((results, trail) => {
      const cityTerms = [
        trail.city.zh,
        trail.city.en,
        trail.province.zh,
        trail.province.en,
        trail.region.zh,
        trail.region.en
      ].join(" ").toLocaleLowerCase();
      const cityMatches = query.length > 0 && cityTerms.includes(query);
      const foods = getPicturedFoods(trail).filter(food => {
        const queryMatches = query.length === 0 || cityMatches || food.toLocaleLowerCase().includes(query);
        const favoriteMatches = !favoritesOnly || favorites.has(favoriteKey(trail.slug, food));
        return queryMatches && favoriteMatches && matchesCategory(food);
      });

      if (foods.length > 0) {
        results.push({ trail, foods });
      }
      return results;
    }, []);
  }

  function savedCountForTrail(trail) {
    return getPicturedFoods(trail).reduce((count, food) => (
      count + Number(favorites.has(favoriteKey(trail.slug, food)))
    ), 0);
  }

  function pruneUnavailableFavorites() {
    const picturedKeys = new Set(videoFoodTrailsData.flatMap(trail => (
      getPicturedFoods(trail).map(food => favoriteKey(trail.slug, food))
    )));
    const availableFavorites = new Set([...favorites].filter(key => picturedKeys.has(key)));
    if (availableFavorites.size !== favorites.size) {
      favorites = availableFavorites;
      persistFavorites();
    }
  }

  function renderStats() {
    const picturedTrails = videoFoodTrailsData.filter(trail => getPicturedFoods(trail).length > 0);
    const totalFoods = picturedTrails.reduce((total, trail) => total + getPicturedFoods(trail).length, 0);
    elements.routeCount.textContent = String(picturedTrails.length);
    elements.cityCount.textContent = String(picturedTrails.length);
    elements.foodCount.textContent = String(totalFoods);
  }

  function renderFavoritesControl() {
    elements.savedCount.textContent = String(favorites.size);
    elements.savedFilter.setAttribute("aria-pressed", String(favoritesOnly));
    const icon = elements.savedFilter.querySelector("i");
    icon.className = favoritesOnly ? "fa-solid fa-heart" : "fa-regular fa-heart";
  }

  function renderGrid() {
    const renderToken = ++gridRenderToken;
    filteredTrails = getFilteredTrails();
    const matchingFoods = filteredTrails.reduce((total, result) => total + result.foods.length, 0);
    elements.resultsCount.textContent = ui.routesFound(filteredTrails.length, matchingFoods);
    elements.empty.hidden = filteredTrails.length > 0;
    elements.grid.hidden = filteredTrails.length === 0;
    elements.randomCity.disabled = filteredTrails.length === 0;

    elements.grid.classList.remove("are-images-ready");
    elements.grid.innerHTML = filteredTrails.map(({ trail, foods }) => {
      const dataIndex = videoFoodTrailsData.findIndex(item => item.slug === trail.slug);
      const city = getCityName(trail);
      const savedCount = savedCountForTrail(trail);
      const previewFoods = foods.slice(0, 3);
      const remaining = foods.length - previewFoods.length;
      const foodVisuals = previewFoods.map(food => {
        const visual = getFoodVisual(trail, food);
        const savedClass = favorites.has(favoriteKey(trail.slug, food)) ? " is-saved" : "";
        return `
          <span class="trail-card-food${savedClass}">
            ${renderVisualMedia(visual, { width: 320, height: 240 })}
            <span class="trail-card-food-label">${escapeHtml(food)}</span>
          </span>`;
      }).join("");
      const moreTag = remaining > 0 ? `<span class="trail-card-more">${escapeHtml(ui.more(remaining))}</span>` : "";

      return `
        <article class="trail-card">
          <button class="trail-card-open" type="button" data-slug="${escapeHtml(trail.slug)}" aria-label="${escapeHtml(ui.openTrail(city))}">
            <span class="trail-card-foods has-${previewFoods.length}-foods">${foodVisuals}${moreTag}</span>
            <span class="trail-card-head">
              <span class="trail-card-index">${String(dataIndex + 1).padStart(2, "0")}</span>
              <span>
                <span class="trail-card-location">${escapeHtml(getLocationName(trail))}</span>
                <h3>${escapeHtml(city)}</h3>
                <span class="trail-card-count">${escapeHtml(ui.cardCount(foods.length))}</span>
              </span>
            </span>
            <span class="trail-card-foot">
              <span>${escapeHtml(ui.openLabel)}</span>
              <span><i class="${savedCount > 0 ? "fa-solid" : "fa-regular"} fa-heart" aria-hidden="true"></i> ${escapeHtml(ui.savedOnCard(savedCount))}</span>
            </span>
          </button>
        </article>`;
    }).join("");

    const images = [...elements.grid.querySelectorAll(".trail-card-food img")];
    Promise.allSettled(images.map(image => (
      typeof image.decode === "function" ? image.decode() : Promise.resolve()
    ))).then(() => {
      if (renderToken === gridRenderToken) {
        elements.grid.classList.add("are-images-ready");
      }
    });
  }

  function getDailyPool() {
    return filteredTrails.flatMap(({ trail, foods }) => foods.map(food => ({ trail, food })));
  }

  function shuffle(items) {
    const result = [...items];
    for (let index = result.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [result[index], result[randomIndex]] = [result[randomIndex], result[index]];
    }
    return result;
  }

  function renderDailyPicks() {
    if (dailySelection.length === 0) {
      elements.dailyPicks.innerHTML = `<p class="daily-picks-empty">${escapeHtml(ui.emptyPicks)}</p>`;
      return;
    }

    elements.dailyPicks.innerHTML = dailySelection.map(({ trail, food }) => {
      const city = getCityName(trail);
      const visual = getFoodVisual(trail, food);
      return `
        <button class="daily-pick" type="button" data-slug="${escapeHtml(trail.slug)}" aria-label="${escapeHtml(ui.dailyLabel(food, city))}">
          ${renderVisualMedia(visual, { width: 120, height: 120 })}
          <span class="daily-pick-copy">
            <strong>${escapeHtml(food)}</strong>
            <small>${escapeHtml(city)}</small>
          </span>
        </button>`;
    }).join("");
  }

  function shuffleDaily(shouldScroll = false, trackInteraction = false) {
    const shuffledPool = shuffle(getDailyPool());
    const usedVisuals = new Set();
    dailySelection = shuffledPool.filter(({ trail, food }) => {
      const visual = getFoodVisual(trail, food);
      const visualKey = visual.image || favoriteKey(trail.slug, food);
      if (usedVisuals.has(visualKey)) {
        return false;
      }
      usedVisuals.add(visualKey);
      return true;
    }).slice(0, 3);
    if (dailySelection.length < 3) {
      dailySelection = [...dailySelection, ...shuffledPool.filter(item => !dailySelection.includes(item))].slice(0, 3);
    }
    renderDailyPicks();
    elements.dailyRoute.classList.remove("is-shuffling");
    requestAnimationFrame(() => elements.dailyRoute.classList.add("is-shuffling"));
    window.setTimeout(() => elements.dailyRoute.classList.remove("is-shuffling"), 540);
    if (shouldScroll) {
      elements.dailyRoute.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    if (trackInteraction) {
      track("video_food_trails_shuffle", { category: activeCategory, count: dailySelection.length });
    }
  }

  function updateResults({ reshuffle = true } = {}) {
    renderFavoritesControl();
    renderGrid();
    if (reshuffle) {
      shuffleDaily(false);
    }
  }

  function renderDrawer(trail) {
    const city = getCityName(trail);
    const picturedFoods = getPicturedFoods(trail);
    activeTrail = trail;
    elements.drawerCity.textContent = city;
    elements.drawerRegion.textContent = getLocationName(trail);
    elements.drawerFoodCount.textContent = String(picturedFoods.length);
    elements.drawerSavedCount.textContent = String(savedCountForTrail(trail));
    elements.drawerFoods.innerHTML = picturedFoods.map(food => {
      const key = favoriteKey(trail.slug, food);
      const isSaved = favorites.has(key);
      const visual = getFoodVisual(trail, food);
      const visualLabel = ui.exactVisual(visual.name);
      const credit = visual.credit
        ? `
          <a class="drawer-food-credit" href="${escapeHtml(visual.credit.sourceUrl)}" target="_blank" rel="noopener">
            <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
            ${escapeHtml(visual.credit.author)} · ${escapeHtml(visual.credit.license)}
          </a>`
        : "";
      return `
        <article class="drawer-food-card${isSaved ? " is-saved" : ""}" data-food="${escapeHtml(food)}">
          <div class="drawer-food-card-inner">
            <button class="drawer-food-face drawer-food-front" type="button" aria-expanded="false" aria-label="${escapeHtml(ui.flipFood(food))}">
              ${renderVisualMedia(visual, { width: 480, height: 360, loading: "lazy" })}
              <span class="drawer-food-front-copy">
                <strong>${escapeHtml(food)}</strong>
                <small><i class="fa-solid fa-rotate" aria-hidden="true"></i> ${escapeHtml(ui.flipHint)}</small>
              </span>
            </button>
            <div class="drawer-food-face drawer-food-back" aria-hidden="true" inert>
              <div class="drawer-food-meta">
                <span class="drawer-food-visual-kind"><i class="fa-regular fa-image" aria-hidden="true"></i> ${escapeHtml(visualLabel)}</span>
                ${credit}
              </div>
              <strong>${escapeHtml(food)}</strong>
              <div class="drawer-food-actions">
                <button class="drawer-food-favorite" type="button" data-key="${escapeHtml(key)}" data-food="${escapeHtml(food)}" aria-pressed="${isSaved}" aria-label="${escapeHtml(isSaved ? ui.removeFood(food) : ui.saveFood(food))}">
                  <i class="${isSaved ? "fa-solid" : "fa-regular"} fa-heart" aria-hidden="true"></i>
                  <span>${escapeHtml(isSaved ? ui.savedLabel : ui.wantToEat)}</span>
                </button>
                <button class="drawer-food-unflip" type="button" aria-label="${escapeHtml(ui.unflipFood(food))}" title="${escapeHtml(ui.unflipFood(food))}">
                  <i class="fa-solid fa-rotate-left" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </article>`;
    }).join("");
  }

  function openDrawer(slug, { updateHash = true, source = "direct" } = {}) {
    const trail = videoFoodTrailsData.find(item => item.slug === slug);
    if (!trail) {
      return;
    }

    lastFocusedElement = document.activeElement;
    renderDrawer(trail);
    elements.drawer.inert = false;
    elements.drawer.setAttribute("aria-hidden", "false");
    elements.backdrop.setAttribute("aria-hidden", "false");
    elements.drawer.classList.add("is-open");
    elements.backdrop.classList.add("is-visible");
    document.body.classList.add("is-drawer-open");
    if (updateHash) {
      history.replaceState(null, "", `${location.pathname}${location.search}#city=${encodeURIComponent(slug)}`);
    }
    window.setTimeout(() => elements.drawerClose.focus(), 260);
    track("video_food_trail_open", { city: slug, source, language });
  }

  function closeDrawer({ updateHash = true } = {}) {
    if (!elements.drawer.classList.contains("is-open")) {
      return;
    }

    elements.drawer.classList.remove("is-open");
    elements.backdrop.classList.remove("is-visible");
    elements.drawer.setAttribute("aria-hidden", "true");
    elements.backdrop.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-drawer-open");
    activeTrail = null;
    window.setTimeout(() => {
      elements.drawer.inert = true;
      if (lastFocusedElement && document.contains(lastFocusedElement)) {
        lastFocusedElement.focus();
      }
    }, 260);
    if (updateHash && location.hash.startsWith("#city=")) {
      history.replaceState(null, "", `${location.pathname}${location.search}`);
    }
  }

  function setFoodCardFlipped(card, flipped) {
    if (!card) {
      return;
    }
    const front = card.querySelector(".drawer-food-front");
    const back = card.querySelector(".drawer-food-back");
    card.classList.toggle("is-flipped", flipped);
    front.setAttribute("aria-expanded", String(flipped));
    front.tabIndex = flipped ? -1 : 0;
    back.setAttribute("aria-hidden", String(!flipped));
    back.inert = !flipped;
  }

  function drawLuckyFood() {
    const cards = [...elements.drawerFoods.querySelectorAll(".drawer-food-card")];
    if (cards.length === 0) {
      return;
    }
    cards.forEach(card => {
      setFoodCardFlipped(card, false);
      card.classList.remove("is-lucky");
    });
    const card = cards[Math.floor(Math.random() * cards.length)];
    const food = card.dataset.food;
    card.scrollIntoView({ behavior: "smooth", block: "center" });
    window.setTimeout(() => {
      setFoodCardFlipped(card, true);
      card.classList.add("is-lucky");
      window.setTimeout(() => card.classList.remove("is-lucky"), 900);
      card.querySelector(".drawer-food-favorite").focus({ preventScroll: true });
    }, 360);
    showToast(ui.lucky(food));
    track("video_food_trail_lucky_food", { city: activeTrail?.slug, food });
  }

  function toggleFavorite(key, food, button) {
    const isSaved = favorites.has(key);
    if (isSaved) {
      favorites.delete(key);
    } else {
      favorites.add(key);
    }
    persistFavorites();
    renderFavoritesControl();
    renderGrid();
    if (activeTrail && button) {
      const card = button.closest(".drawer-food-card");
      const nowSaved = !isSaved;
      card.classList.toggle("is-saved", nowSaved);
      button.setAttribute("aria-pressed", String(nowSaved));
      button.setAttribute("aria-label", nowSaved ? ui.removeFood(food) : ui.saveFood(food));
      button.querySelector("i").className = `${nowSaved ? "fa-solid" : "fa-regular"} fa-heart`;
      button.querySelector("span").textContent = nowSaved ? ui.savedLabel : ui.wantToEat;
      elements.drawerSavedCount.textContent = String(savedCountForTrail(activeTrail));
    }
    showToast(isSaved ? ui.removed(food) : ui.saved(food));
    track("video_food_trail_favorite", {
      action: isSaved ? "remove" : "add",
      city: activeTrail?.slug || "unknown",
      food
    });
  }

  function showToast(message) {
    window.clearTimeout(toastTimer);
    elements.toast.textContent = message;
    elements.toast.classList.add("is-visible");
    toastTimer = window.setTimeout(() => elements.toast.classList.remove("is-visible"), 2300);
  }

  function resetFilters() {
    activeCategory = "all";
    favoritesOnly = false;
    elements.search.value = "";
    elements.clearSearch.hidden = true;
    elements.categories.querySelectorAll("button").forEach(button => {
      const isActive = button.dataset.category === "all";
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
    updateResults();
  }

  function drawRandomCity() {
    if (filteredTrails.length === 0 || randomTimer) {
      showToast(ui.noRandom);
      return;
    }

    elements.randomCity.classList.add("is-spinning");
    elements.randomCity.disabled = true;
    randomTimer = window.setTimeout(() => {
      const selection = filteredTrails[Math.floor(Math.random() * filteredTrails.length)];
      elements.randomCity.classList.remove("is-spinning");
      elements.randomCity.disabled = false;
      randomTimer = null;
      openDrawer(selection.trail.slug, { source: "random_city" });
      track("video_food_trails_random_city", { city: selection.trail.slug });
    }, 520);
  }

  function trapDrawerFocus(event) {
    if (event.key !== "Tab" || !elements.drawer.classList.contains("is-open")) {
      return;
    }
    const focusable = [...elements.drawer.querySelectorAll("a[href], button:not([disabled])")];
    if (focusable.length === 0) {
      return;
    }
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  elements.search.addEventListener("input", () => {
    elements.clearSearch.hidden = elements.search.value.length === 0;
    updateResults();
  });

  elements.search.addEventListener("change", () => {
    const queryLength = elements.search.value.trim().length;
    if (queryLength === 0) {
      return;
    }
    const matchingFoods = filteredTrails.reduce((total, result) => total + result.foods.length, 0);
    track("video_food_trails_search", {
      language,
      queryLength: queryLength <= 2 ? "1-2" : queryLength <= 5 ? "3-5" : queryLength <= 10 ? "6-10" : "11+",
      routes: filteredTrails.length,
      foods: matchingFoods
    });
  });

  elements.clearSearch.addEventListener("click", () => {
    elements.search.value = "";
    elements.clearSearch.hidden = true;
    elements.search.focus();
    updateResults();
  });

  elements.categories.addEventListener("click", event => {
    const button = event.target.closest("button[data-category]");
    if (!button || button.dataset.category === activeCategory) {
      return;
    }
    activeCategory = button.dataset.category;
    elements.categories.querySelectorAll("button").forEach(categoryButton => {
      const isActive = categoryButton === button;
      categoryButton.classList.toggle("is-active", isActive);
      categoryButton.setAttribute("aria-pressed", String(isActive));
    });
    updateResults();
    track("video_food_trails_filter", { category: activeCategory });
  });

  elements.savedFilter.addEventListener("click", () => {
    favoritesOnly = !favoritesOnly;
    updateResults();
    track("video_food_trails_saved_filter", { active: favoritesOnly });
  });

  elements.grid.addEventListener("click", event => {
    const button = event.target.closest(".trail-card-open");
    if (button) {
      openDrawer(button.dataset.slug, { source: "city_grid" });
    }
  });

  elements.dailyPicks.addEventListener("click", event => {
    const button = event.target.closest(".daily-pick");
    if (button) {
      openDrawer(button.dataset.slug, { source: "daily_pick" });
    }
  });

  elements.drawerFoods.addEventListener("click", event => {
    const favoriteButton = event.target.closest(".drawer-food-favorite");
    if (favoriteButton) {
      toggleFavorite(favoriteButton.dataset.key, favoriteButton.dataset.food, favoriteButton);
      return;
    }
    const front = event.target.closest(".drawer-food-front");
    if (front) {
      const card = front.closest(".drawer-food-card");
      setFoodCardFlipped(card, true);
      card.querySelector(".drawer-food-favorite").focus();
      track("video_food_trail_flip_card", { city: activeTrail?.slug, food: card.dataset.food });
      return;
    }
    const unflipButton = event.target.closest(".drawer-food-unflip");
    if (unflipButton) {
      const card = unflipButton.closest(".drawer-food-card");
      setFoodCardFlipped(card, false);
      card.querySelector(".drawer-food-front").focus();
    }
  });

  elements.randomCity.addEventListener("click", drawRandomCity);
  elements.heroMosaicShuffle?.addEventListener("click", () => {
    shuffleHeroMosaic({ trackInteraction: true });
  });
  elements.drawerLucky.addEventListener("click", drawLuckyFood);
  elements.heroPick.addEventListener("click", () => shuffleDaily(true, true));
  elements.dailyShuffle.addEventListener("click", () => shuffleDaily(false, true));
  elements.resetFilters.addEventListener("click", resetFilters);
  elements.drawerClose.addEventListener("click", () => closeDrawer());
  elements.backdrop.addEventListener("click", () => closeDrawer());
  elements.drawer.addEventListener("keydown", trapDrawerFocus);

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeDrawer();
    }
  });

  window.addEventListener("hashchange", () => {
    const hashSlug = new URLSearchParams(location.hash.slice(1)).get("city");
    if (hashSlug) {
      openDrawer(hashSlug, { updateHash: false, source: "deep_link" });
    } else {
      closeDrawer({ updateHash: false });
    }
  });

  pruneUnavailableFavorites();
  shuffleHeroMosaic({ animate: false });
  renderStats();
  updateResults();
  const initialSlug = new URLSearchParams(location.hash.slice(1)).get("city");
  if (initialSlug) {
    openDrawer(initialSlug, { updateHash: false, source: "deep_link" });
  }
})();
