// ==================== DATA & STORAGE ====================
      const STORAGE_KEY = "naturalFertilizerDB";

      const defaultData = {
        settings: {
          companyName: "کود طبیعی",
          phone: "۰۲۱-۱۲۳۴۵۶۷۸",
          email: "info@naturalfert.ir",
          address: "تهران، خیابان کشاورزی، پلاک ۱۲",
          hours: "شنبه تا چهارشنبه: ۸ صبح تا ۵ عصر\nپنجشنبه: ۸ صبح تا ۱ ظهر",
          heroTitle: "برای خاک بهتر، انتخاب هوشمندانه‌تر",
          heroDesc:
            "ما با تولید کودهای طبیعی و ارگانیک، به کشاورزان کمک می‌کنیم تا خاک سالم‌تر، محصول بیشتر و کشاورزی پایدارتری داشته باشند.",
          aboutText:
            "شرکت کود طبیعی با بیش از ۱۵ سال سابقه در تولید و عرضه کودهای ارگانیک و طبیعی، متعهد به ارائه محصولات با کیفیت و سازگار با محیط زیست است. ما از بهترین مواد اولیه طبیعی استفاده می‌کنیم تا سلامت خاک و گیاهان شما تضمین شود.",
          footerDesc:
            "تولید و عرضه کودهای طبیعی و ارگانیک با کیفیت بالا برای کشاورزی پایدار، باغ‌ها و گلخانه‌ها.",
          socials: { instagram: "#", telegram: "#", whatsapp: "#" },
          seasonalMode: "auto", // auto | manual
          manualSeason: "spring",
        },
        stats: {
          products: 12,
          customers: 1850,
          consultations: 3200,
          years: 15,
          solutions: 48,
          naturalPercent: 100,
        },
        products: [
          {
            id: 1,
            name: "کود کمپوست غنی‌شده",
            category: "کود آلی",
            shortDesc:
              "کمپوست طبیعی غنی‌شده با مواد معدنی برای تقویت خاک و رشد گیاهان.",
            type: "جامد",
            packaging: "کیسه ۲۵ کیلوگرمی",
            suitableFor: "باغ، زراعت، گلخانه",
            status: "active",
            image: "",
            weight: "۲۵ کیلوگرم",
            form: "گرانول",
            compounds: "مواد آلی، نیتروژن، فسفر، پتاسیم، ریزمغذی‌ها",
            storage: "در جای خشک و خنک نگهداری شود",
            country: "ایران",
            brand: "کود طبیعی",
            consumptionType: "خاکی",
            fullDesc:
              "کود کمپوست غنی‌شده محصولی کاملاً طبیعی است که از فرآیند کمپوستینگ کنترل‌شده مواد آلی گیاهی و حیوانی به دست می‌آید. این کود با افزودن مواد معدنی ضروری، تعادل کاملی از عناصر غذایی را برای گیاهان فراهم می‌کند.\n\nاستفاده منظم از این کود باعث بهبود ساختار خاک، افزایش ظرفیت نگهداری آب، تحریک فعالیت میکروارگانیسم‌های مفید و در نهایت افزایش عملکرد محصول می‌شود. مناسب برای انواع کشت‌های زراعی، باغی و گلخانه‌ای است.",
            usageSteps: [
              "خاک را تا عمق ۱۵-۲۰ سانتی‌متر شخم بزنید.",
              "مقدار توصیه‌شده کود را به طور یکنواخت روی سطح خاک پخش کنید.",
              "کود را با خاک مخلوط کرده و آبیاری کنید.",
              "برای نتایج بهتر هر ۳-۴ ماه یکبار تکرار شود.",
            ],
            usageNotes:
              "از تماس مستقیم کود با ریشه گیاهان جوان خودداری کنید. در فصل رشد گیاه مصرف شود.",
            benefits: [
              "بهبود کیفیت و ساختار خاک",
              "افزایش ظرفیت نگهداری آب",
              "تأمین عناصر غذایی به صورت تدریجی",
              "سازگار با محیط زیست و کشاورزی ارگانیک",
              "مناسب برای انواع کشت",
            ],
            applications:
              "زراعت غلات، سبزیجات، درختان میوه، گلخانه‌ها و فضای سبز",
            warnings:
              "دور از دسترس کودکان نگهداری شود. از مصرف بیش از حد خودداری کنید.",
            faq: [
              {
                q: "آیا این کود برای کشاورزی ارگانیک مناسب است؟",
                a: "بله، کاملاً طبیعی و سازگار با استانداردهای ارگانیک است.",
              },
              {
                q: "هر چند وقت یکبار باید مصرف شود؟",
                a: "معمولاً هر ۳ تا ۴ ماه یکبار کافی است.",
              },
            ],
            related: [2, 3],
          },
          {
            id: 2,
            name: "کود مایع جلبک دریایی",
            category: "کود طبیعی",
            shortDesc:
              "محلول غذایی طبیعی از عصاره جلبک دریایی برای تقویت رشد و مقاومت گیاهان.",
            type: "مایع",
            packaging: "بطری ۱ لیتری و ۵ لیتری",
            suitableFor: "گلخانه، باغ، آپارتمانی",
            status: "active",
            image: "",
            weight: "۱ لیتر",
            form: "مایع",
            compounds: "عصاره جلبک دریایی، هورمون‌های طبیعی رشد، آمینواسیدها",
            storage: "دور از نور مستقیم خورشید و یخ‌زدگی",
            country: "ایران",
            brand: "کود طبیعی",
            consumptionType: "محلول‌پاشی و آبیاری",
            fullDesc:
              "کود مایع جلبک دریایی از بهترین گونه‌های جلبک دریایی استخراج شده و سرشار از هورمون‌های رشد طبیعی، ویتامین‌ها و عناصر کمیاب است. این محصول مقاومت گیاه را در برابر تنش‌های محیطی افزایش داده و کیفیت میوه و گل را بهبود می‌بخشد.",
            usageSteps: [
              "محلول را با نسبت ۱ به ۵۰۰ با آب رقیق کنید.",
              "روی برگ‌ها محلول‌پاشی کنید یا همراه آبیاری مصرف نمایید.",
              "هر ۲ هفته یکبار در فصل رشد تکرار شود.",
            ],
            usageNotes: "در ساعات خنک روز محلول‌پاشی انجام شود.",
            benefits: [
              "افزایش مقاومت به تنش خشکی و سرما",
              "بهبود کیفیت و رنگ میوه",
              "تحریک ریشه‌زایی",
              "افزایش گلدهی",
            ],
            applications: "گلخانه‌ها، درختان میوه، گیاهان زینتی و سبزیجات",
            warnings: "از مخلوط کردن با سموم قوی بدون مشورت خودداری کنید.",
            faq: [],
            related: [1, 4],
          },
          {
            id: 3,
            name: "بهبوددهنده خاک هوموسی",
            category: "بهبوددهنده خاک",
            shortDesc:
              "افزایش ماده آلی خاک و بهبود تهویه و زهکشی با هوموس طبیعی.",
            type: "جامد",
            packaging: "کیسه ۲۰ کیلوگرمی",
            suitableFor: "زراعت، باغ",
            status: "active",
            image: "",
            weight: "۲۰ کیلوگرم",
            form: "پودری",
            compounds: "هومیک اسید، فولویک اسید، مواد آلی",
            storage: "در جای خشک",
            country: "ایران",
            brand: "کود طبیعی",
            consumptionType: "خاکی",
            fullDesc:
              "این محصول بر پایه هوموس طبیعی تولید شده و به طور چشمگیری ماده آلی خاک را افزایش می‌دهد. مناسب خاک‌های فقیر و فشرده است.",
            usageSteps: [
              "مقدار توصیه‌شده را با خاک مخلوط کنید.",
              "قبل از کاشت یا در فصل پاییز مصرف شود.",
            ],
            usageNotes: "",
            benefits: [
              "افزایش ماده آلی خاک",
              "بهبود تهویه",
              "افزایش فعالیت میکروبی",
            ],
            applications: "خاک‌های زراعی و باغی",
            warnings: "",
            faq: [],
            related: [1],
          },
          {
            id: 4,
            name: "کود مخصوص درختان میوه",
            category: "کود مخصوص باغ",
            shortDesc:
              "فرمول متعادل برای تغذیه درختان میوه در مراحل مختلف رشد.",
            type: "جامد",
            packaging: "کیسه ۱۰ و ۲۵ کیلوگرمی",
            suitableFor: "باغ",
            status: "active",
            image: "",
            weight: "۱۰ کیلوگرم",
            form: "گرانول",
            compounds: "N-P-K متعادل + ریزمغذی‌ها + مواد آلی",
            storage: "جای خشک و خنک",
            country: "ایران",
            brand: "کود طبیعی",
            consumptionType: "خاکی",
            fullDesc:
              "این کود مخصوص درختان میوه با توجه به نیازهای غذایی درختان در مراحل گلدهی، تشکیل میوه و رسیدن طراحی شده است.",
            usageSteps: [
              "در اوایل بهار و پس از برداشت میوه مصرف شود.",
              "در سایه انداز درخت پخش و با خاک مخلوط گردد.",
            ],
            usageNotes: "بر اساس سن و نوع درخت مقدار مصرف تنظیم شود.",
            benefits: ["افزایش باردهی", "بهبود کیفیت میوه", "تقویت درخت"],
            applications: "انواع درختان میوه هسته‌دار و دانه‌دار",
            warnings: "",
            faq: [],
            related: [1, 2],
          },
        ],
        users: [
          {
            id: 1,
            name: "مدیر سیستم",
            email: "admin@natural.ir",
            mobile: "09120000000",
            password: "admin123",
            role: "admin",
            status: "active",
            createdAt: "2024-01-01",
          },
        ],
        consultations: [],
        tickets: [],
        activityLog: [],
        currentUser: null,
      };

      function loadDB() {
        try {
          const raw = localStorage.getItem(STORAGE_KEY);
          if (raw) {
            const data = JSON.parse(raw);
            // merge with defaults for new fields
            return {
              ...defaultData,
              ...data,
              settings: { ...defaultData.settings, ...data.settings },
              stats: { ...defaultData.stats, ...data.stats },
            };
          }
        } catch (e) {
          console.error(e);
        }
        return JSON.parse(JSON.stringify(defaultData));
      }

      function saveDB(db) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
      }

      let DB = loadDB();

      // ==================== UTILITIES ====================
      function escapeHtml(text) {
        if (!text) return "";
        const div = document.createElement("div");
        div.textContent = text;
        return div.innerHTML;
      }

      function showToast(msg, type = "success") {
        const container = document.getElementById("toastContainer");
        const toast = document.createElement("div");
        toast.className = `toast ${type}`;
        toast.innerHTML = `<span>${type === "success" ? "✓" : "✕"}</span><span>${escapeHtml(msg)}</span>`;
        container.appendChild(toast);
        setTimeout(() => toast.remove(), 3500);
      }

      function logActivity(action, detail = "") {
        DB.activityLog.unshift({
          id: Date.now(),
          action,
          detail,
          time: new Date().toLocaleString("fa-IR"),
          user: DB.currentUser ? DB.currentUser.name : "سیستم",
        });
        if (DB.activityLog.length > 100) DB.activityLog.pop();
        saveDB(DB);
      }

      function getSeason() {
        if (DB.settings.seasonalMode === "manual")
          return DB.settings.manualSeason;
        const m = new Date().getMonth() + 1;
        if (m >= 3 && m <= 5) return "spring";
        if (m >= 6 && m <= 8) return "summer";
        if (m >= 9 && m <= 11) return "autumn";
        return "winter";
      }

      // ==================== THEME ====================
      function initTheme() {
        const saved = localStorage.getItem("theme") || "light";
        document.documentElement.setAttribute("data-theme", saved);
        document.getElementById("themeToggle").textContent =
          saved === "dark" ? "☀️" : "🌙";
        document.documentElement.setAttribute("data-season", getSeason());
      }

      document.getElementById("themeToggle").addEventListener("click", () => {
        const current = document.documentElement.getAttribute("data-theme");
        const next = current === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", next);
        localStorage.setItem("theme", next);
        document.getElementById("themeToggle").textContent =
          next === "dark" ? "☀️" : "🌙";
      });

      // ==================== QUICK ADMIN / INLINE EDITOR ====================
      // Site-level settings keys that can be edited inline anywhere they appear
      const INLINE_SETTINGS_FIELDS = [
        "companyName",
        "phone",
        "email",
        "address",
        "hours",
        "heroTitle",
        "heroDesc",
        "footerDesc",
        "aboutText",
      ];

      // Product field keys editable via data-edit-key="product:{id}:{field}"
      const INLINE_PRODUCT_FIELDS = [
        "name",
        "category",
        "shortDesc",
        "fullDesc",
        "type",
        "packaging",
        "suitableFor",
        "weight",
        "form",
        "compounds",
        "storage",
        "country",
        "brand",
        "consumptionType",
        "usageNotes",
        "applications",
        "warnings",
      ];

      // Stats keys: data-edit-key="stat:products" etc.
      const INLINE_STAT_FIELDS = [
        "products",
        "customers",
        "consultations",
        "years",
        "solutions",
        "naturalPercent",
      ];

      let inlineEditActive = false;
      let inlineEditSnapshot = null; // full DB snapshot for cancel

      function isAdmin() {
        return !!(DB.currentUser && DB.currentUser.role === "admin");
      }

      function showQuickAdminBar() {
        const bar = document.getElementById("quickAdminBar");
        if (!bar || !isAdmin()) return;
        bar.classList.add("visible");
        syncQuickSeasonSelect();
      }

      function hideQuickAdminBar() {
        const bar = document.getElementById("quickAdminBar");
        const hint = document.getElementById("adminEditHint");
        if (bar) bar.classList.remove("visible");
        if (hint) hint.classList.remove("visible");
        document.body.classList.remove("inline-editing-active");
      }

      function syncQuickSeasonSelect() {
        const select = document.getElementById("quickSeasonSelect");
        if (!select || !DB.settings) return;
        select.value =
          DB.settings.seasonalMode === "manual"
            ? DB.settings.manualSeason
            : "auto";
      }

      function quickChangeSeason(value) {
        if (!isAdmin()) return;
        if (value === "auto") {
          DB.settings.seasonalMode = "auto";
        } else {
          DB.settings.seasonalMode = "manual";
          DB.settings.manualSeason = value;
        }
        saveDB(DB);
        applySeasonTheme();
        logActivity("تغییر تم فصلی", value === "auto" ? "خودکار" : value);
        showToast("تم فصلی اعمال شد");
      }

      function applySeasonTheme() {
        document.documentElement.setAttribute("data-season", getSeason());
        syncQuickSeasonSelect();
      }

      function parseEditKey(key) {
        if (!key) return null;
        if (key.startsWith("product:")) {
          const parts = key.split(":");
          if (parts.length >= 3) {
            return {
              type: "product",
              id: parseInt(parts[1], 10),
              field: parts.slice(2).join(":"),
            };
          }
        }
        if (key.startsWith("stat:")) {
          return { type: "stat", field: key.slice(5) };
        }
        if (key.startsWith("productList:")) {
          // productList:{id}:{field} for list items like usageSteps, benefits (line-based)
          const parts = key.split(":");
          if (parts.length >= 3) {
            return {
              type: "productList",
              id: parseInt(parts[1], 10),
              field: parts.slice(2).join(":"),
            };
          }
        }
        if (INLINE_SETTINGS_FIELDS.includes(key)) {
          return { type: "settings", field: key };
        }
        return null;
      }

      function toggleInlineEdit() {
        if (!isAdmin()) {
          showToast("دسترسی مدیر لازم است", "error");
          return;
        }

        inlineEditActive = !inlineEditActive;
        document.body.classList.toggle(
          "inline-editing-active",
          inlineEditActive,
        );

        const hint = document.getElementById("adminEditHint");
        if (hint) {
          hint.classList.toggle("visible", inlineEditActive);
          if (inlineEditActive) {
            hint.innerHTML =
              "روی هر متن مشخص‌شده کلیک کن و ویرایش کن. متن محصولات، آمار، درباره ما و فوتر هم قابل ویرایش است. سپس «ذخیره» را بزن.";
          }
        }

        if (inlineEditActive) {
          // Full snapshot so cancel restores products + settings + stats
          inlineEditSnapshot = JSON.parse(
            JSON.stringify({
              settings: DB.settings,
              products: DB.products,
              stats: DB.stats,
            }),
          );
          bindInlineEditableElements();
          showToast("حالت ویرایش مستقیم فعال شد — تقریباً همه متن‌ها قابل ویرایش‌اند");
        } else {
          clearInlineEditableElements();
        }
      }

      function bindInlineEditableElements() {
        document.querySelectorAll("[data-edit-key]").forEach((el) => {
          const parsed = parseEditKey(el.dataset.editKey);
          if (!parsed) return;

          // Skip if product field not allowed
          if (
            parsed.type === "product" &&
            !INLINE_PRODUCT_FIELDS.includes(parsed.field)
          )
            return;
          if (
            parsed.type === "productList" &&
            !["usageSteps", "benefits"].includes(parsed.field)
          )
            return;
          if (
            parsed.type === "stat" &&
            !INLINE_STAT_FIELDS.includes(parsed.field)
          )
            return;

          el.classList.add("inline-editable");
          el.setAttribute("contenteditable", "true");
          el.setAttribute("spellcheck", "false");
          el.dataset.originalHtml = el.innerHTML;

          el.removeEventListener("input", handleInlineInput);
          el.addEventListener("input", handleInlineInput);
        });
      }

      function clearInlineEditableElements() {
        document.querySelectorAll("[data-edit-key]").forEach((el) => {
          el.classList.remove("inline-editable");
          el.removeAttribute("contenteditable");
          el.removeAttribute("spellcheck");
          el.removeEventListener("input", handleInlineInput);
        });
      }

      function handleInlineInput(event) {
        const el = event.currentTarget;
        const parsed = parseEditKey(el.dataset.editKey);
        if (!parsed) return;

        const value = el.innerText.trim();

        if (parsed.type === "settings") {
          let v = value;
          // strip decorative prefixes from footer contact fields
          if (parsed.field === "phone") v = v.replace(/^[📞\s]+/, "");
          if (parsed.field === "email") v = v.replace(/^[✉️\s]+/, "");
          if (parsed.field === "address") v = v.replace(/^[📍\s]+/, "");
          DB.settings[parsed.field] = v;
          return;
        }

        if (parsed.type === "stat") {
          const num = parseInt(value.replace(/[^\d]/g, ""), 10);
          if (!isNaN(num)) DB.stats[parsed.field] = num;
          return;
        }

        if (parsed.type === "product") {
          const p = DB.products.find((x) => x.id === parsed.id);
          if (p) p[parsed.field] = value;
          return;
        }

        if (parsed.type === "productList") {
          const p = DB.products.find((x) => x.id === parsed.id);
          if (p) {
            // each non-empty line is one item; strip leading bullets / numbers
            p[parsed.field] = value
              .split("\n")
              .map((s) =>
                s
                  .trim()
                  .replace(/^[•\-\*]\s*/, "")
                  .replace(/^\d+[\.\)\-]\s*/, ""),
              )
              .filter(Boolean);
          }
        }
      }

      function saveInlineEdits() {
        if (!isAdmin() || !inlineEditActive) return;

        // Trim settings
        INLINE_SETTINGS_FIELDS.forEach((k) => {
          if (typeof DB.settings[k] === "string") {
            DB.settings[k] = DB.settings[k].trim();
          }
        });

        // Trim product string fields
        DB.products.forEach((p) => {
          INLINE_PRODUCT_FIELDS.forEach((f) => {
            if (typeof p[f] === "string") p[f] = p[f].trim();
          });
        });

        saveDB(DB);
        updateSiteTexts();
        applySeasonTheme();
        inlineEditSnapshot = JSON.parse(
          JSON.stringify({
            settings: DB.settings,
            products: DB.products,
            stats: DB.stats,
          }),
        );
        inlineEditActive = false;
        document.body.classList.remove("inline-editing-active");
        clearInlineEditableElements();
        render(); // refresh cards/detail with saved values
        showToast("همه تغییرات سایت و محصولات ذخیره شد");
        logActivity("ویرایش مستقیم کامل سایت");
      }

      function cancelInlineEdits() {
        if (!inlineEditActive) return;

        if (inlineEditSnapshot) {
          DB.settings = JSON.parse(JSON.stringify(inlineEditSnapshot.settings));
          DB.products = JSON.parse(JSON.stringify(inlineEditSnapshot.products));
          DB.stats = JSON.parse(JSON.stringify(inlineEditSnapshot.stats));
        }

        inlineEditActive = false;
        document.body.classList.remove("inline-editing-active");
        clearInlineEditableElements();
        updateSiteTexts();
        applySeasonTheme();
        render();
        showToast("تغییرات لغو شد");
      }

      window.toggleInlineEdit = toggleInlineEdit;
      window.quickChangeSeason = quickChangeSeason;
      window.saveInlineEdits = saveInlineEdits;
      window.cancelInlineEdits = cancelInlineEdits;
      window.showQuickAdminBar = showQuickAdminBar;

      // ==================== NAVIGATION ====================
      // Fix: previously this both changed location.hash AND called render() directly,
      // while a separate 'hashchange' listener also called render() — causing a double
      // render (and a double scroll/animation flicker) on every navigation click.
      // Now navigate() only changes the hash; render() runs exactly once, from the
      // hashchange listener. If the hash isn't actually changing (e.g. clicking the
      // same menu item twice), we call render() directly so the click still does something.
      function navigate(page, param = null) {
        const newHash =
          param !== null && param !== undefined ? `${page}/${param}` : page;
        if (window.location.hash.slice(1) === newHash) {
          render();
        } else {
          window.location.hash = newHash;
        }
        window.scrollTo(0, 0);
        closeMobile();
        closeAdminSidebar();
      }

      function closeMobile() {
        document.getElementById("mobileMenu").classList.remove("open");
      }

      window.toggleAdminSidebar = function () {
        const sb = document.getElementById("adminSidebar");
        const ov = document.getElementById("adminOverlay");
        if (sb) sb.classList.toggle("open");
        if (ov) ov.classList.toggle("open");
      };

      window.closeAdminSidebar = function () {
        const sb = document.getElementById("adminSidebar");
        const ov = document.getElementById("adminOverlay");
        if (sb) sb.classList.remove("open");
        if (ov) ov.classList.remove("open");
      };

      document.getElementById("mobileToggle").addEventListener("click", () => {
        document.getElementById("mobileMenu").classList.toggle("open");
      });

      window.addEventListener("scroll", () => {
        document
          .getElementById("mainHeader")
          .classList.toggle("scrolled", window.scrollY > 20);
      });

      window.addEventListener("hashchange", render);
      window.addEventListener("load", () => {
        initTheme();
        document.getElementById("year").textContent = new Date().getFullYear();
        updateSiteTexts();
        render();
        if (DB.currentUser && DB.currentUser.role === "admin") {
          document.getElementById("adminBtn").style.display = "inline-flex";
          showQuickAdminBar();
          syncQuickSeasonSelect();
        }
      });

      function updateSiteTexts() {
        const s = DB.settings;
        const siteName = document.getElementById("siteName");
        const footerCompany = document.getElementById("footerCompany");
        const footerDesc = document.getElementById("footerDesc");
        const footerPhone = document.getElementById("footerPhone");
        const footerEmail = document.getElementById("footerEmail");
        const footerAddress = document.getElementById("footerAddress");
        const footerHours = document.getElementById("footerHours");
        const footerCopy = document.getElementById("footerCopy");

        if (siteName) siteName.textContent = s.companyName;
        if (footerCompany) footerCompany.textContent = s.companyName;
        if (footerDesc) footerDesc.textContent = s.footerDesc;
        if (footerPhone) footerPhone.textContent = "📞 " + s.phone;
        if (footerEmail) footerEmail.textContent = "✉️ " + s.email;
        if (footerAddress) footerAddress.textContent = "📍 " + s.address;
        if (footerHours) footerHours.innerHTML = escapeHtml(s.hours).replace(
          /\n/g,
          "<br>",
        );
        if (footerCopy) footerCopy.textContent = s.companyName;
        applySeasonTheme();
      }

      // ==================== RENDER ====================
      function render() {
        const hash = window.location.hash.slice(1) || "home";
        const [page, param] = hash.split("/");
        const app = document.getElementById("app");
        const header = document.getElementById("mainHeader");
        const footer = document.getElementById("mainFooter");

        // Update nav active
        document.querySelectorAll(".nav a").forEach((a) => {
          a.classList.toggle("active", a.dataset.page === page);
        });

        if (page === "admin" || page.startsWith("admin")) {
          header.style.display = "none";
          footer.style.display = "none";
          renderAdmin(page, param);
          return;
        }

        header.style.display = "";
        footer.style.display = "";

        if (isAdmin()) {
          showQuickAdminBar();
        } else {
          hideQuickAdminBar();
        }

        switch (page) {
          case "home":
            renderHome();
            break;
          case "products":
            renderProducts();
            break;
          case "product":
            renderProductDetail(param);
            break;
          case "about":
            renderAbout();
            break;
          case "benefits":
            renderBenefits();
            break;
          case "consult":
            renderConsult();
            break;
          case "support":
            renderSupport();
            break;
          case "contact":
            renderContact();
            break;
          default:
            renderHome();
        }

        if (isAdmin() && inlineEditActive) {
          bindInlineEditableElements();
        }
      }

      // ==================== PUBLIC PAGES ====================
      function renderHome() {
        const s = DB.settings;
        const stats = DB.stats;
        const products = DB.products
          .filter((p) => p.status === "active")
          .slice(0, 3);
        document.getElementById("app").innerHTML = `
        <section class="hero">
            <div class="container hero-grid">
                <div class="hero-content fade-in">
                    <h1 data-edit-key="heroTitle">${escapeHtml(s.heroTitle).replace("انتخاب هوشمندانه‌تر", "<span>انتخاب هوشمندانه‌تر</span>")}</h1>
                    <p data-edit-key="heroDesc">${escapeHtml(s.heroDesc)}</p>
                    <div class="hero-btns">
                        <button class="btn btn-primary" onclick="navigate('products')">مشاهده محصولات</button>
                        <button class="btn btn-outline" onclick="navigate('consult')">درخواست مشاوره</button>
                    </div>
                </div>
                <div class="hero-visual fade-in">
                    <div class="hero-card">
                        <span class="hero-card-badge">محصول ویژه</span>
                        <div class="placeholder-visual" style="height:180px;border-radius:16px;display:flex;align-items:center;justify-content:center;font-size:4rem;margin-bottom:16px;">🌿</div>
                        <h3>کودهای طبیعی با کیفیت</h3>
                        <p>تضمین سلامت خاک و افزایش عملکرد محصول با فرمول‌های علمی و طبیعی</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="stats">
            <div class="container">
                <div class="stats-grid stagger">
                    <div class="stat-card"><div class="num" data-edit-key="stat:products">${stats.products}+</div><div class="label">محصول</div></div>
                    <div class="stat-card"><div class="num" data-edit-key="stat:customers">${stats.customers.toLocaleString("fa-IR")}+</div><div class="label">مشتری راضی</div></div>
                    <div class="stat-card"><div class="num" data-edit-key="stat:consultations">${stats.consultations.toLocaleString("fa-IR")}+</div><div class="label">درخواست مشاوره</div></div>
                    <div class="stat-card"><div class="num" data-edit-key="stat:years">${stats.years}</div><div class="label">سال فعالیت</div></div>
                    <div class="stat-card"><div class="num" data-edit-key="stat:solutions">${stats.solutions}</div><div class="label">راهکار کشاورزی</div></div>
                    <div class="stat-card"><div class="num" data-edit-key="stat:naturalPercent">${stats.naturalPercent}%</div><div class="label">تمرکز بر محصولات طبیعی</div></div>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="container">
                <div class="section-header">
                    <h2>محصولات منتخب</h2>
                    <p>برخی از بهترین محصولات کود طبیعی ما</p>
                </div>
                <div class="products-grid stagger" id="homeProducts"></div>
                <div class="text-center mt-20">
                    <button class="btn btn-primary" onclick="navigate('products')">مشاهده همه محصولات</button>
                </div>
            </div>
        </section>
        <section class="section" style="background:var(--primary-soft);">
            <div class="container">
                <div class="section-header">
                    <h2>چرا کود طبیعی؟</h2>
                    <p>مزایای استفاده از محصولات ارگانیک و طبیعی ما</p>
                </div>
                <div class="benefits-grid stagger">
                    <div class="benefit-card"><div class="benefit-icon">🌍</div><h3>سازگار با محیط زیست</h3><p>بدون مواد شیمیایی مضر و کاملاً طبیعی</p></div>
                    <div class="benefit-card"><div class="benefit-icon">🌱</div><h3>بهبود سلامت خاک</h3><p>افزایش ماده آلی و فعالیت میکروبی خاک</p></div>
                    <div class="benefit-card"><div class="benefit-icon">📈</div><h3>افزایش عملکرد</h3><p>محصول بیشتر و با کیفیت‌تر</p></div>
                    <div class="benefit-card"><div class="benefit-icon">🛡️</div><h3>مقاومت بیشتر</h3><p>افزایش مقاومت گیاه به تنش‌ها</p></div>
                </div>
            </div>
        </section>`;
        const grid = document.getElementById("homeProducts");
        products.forEach((p) => grid.appendChild(createProductCard(p)));
      }

      function createProductCard(p) {
        const div = document.createElement("div");
        div.className = "product-card";
        div.innerHTML = `
            <div class="product-card-img">
                <div class="placeholder-visual" style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:4rem;">🌿</div>
                <span class="product-card-badge" data-edit-key="product:${p.id}:category">${escapeHtml(p.category)}</span>
            </div>
            <div class="product-card-body">
                <div class="product-card-cat" data-edit-key="product:${p.id}:category">${escapeHtml(p.category)}</div>
                <h3 data-edit-key="product:${p.id}:name">${escapeHtml(p.name)}</h3>
                <p data-edit-key="product:${p.id}:shortDesc">${escapeHtml(p.shortDesc)}</p>
                <div class="product-meta">
                    <span data-edit-key="product:${p.id}:type">${escapeHtml(p.type)}</span>
                    <span data-edit-key="product:${p.id}:packaging">${escapeHtml(p.packaging)}</span>
                    <span data-edit-key="product:${p.id}:suitableFor">${escapeHtml(p.suitableFor)}</span>
                </div>
                <div class="product-card-actions">
                    <button class="btn btn-primary btn-sm" onclick="navigate('product', ${p.id})">مشاهده محصول</button>
                    <button class="btn btn-outline btn-sm" onclick="navigate('consult')">مشاوره</button>
                </div>
            </div>`;
        return div;
      }

      function renderProducts() {
        document.getElementById("app").innerHTML = `
        <section class="section" style="padding-top:calc(var(--header-h) + 40px);">
            <div class="container">
                <div class="section-header">
                    <h2>محصولات ما</h2>
                    <p>مجموعه کامل کودهای طبیعی و ارگانیک</p>
                </div>
                <div class="filters">
                    <div class="search-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                        <input type="text" id="productSearch" placeholder="جستجوی محصول..." oninput="filterProducts()">
                    </div>
                    <div class="filter-btns" id="categoryFilters">
                        <button class="filter-btn active" data-cat="all" onclick="setCategoryFilter('all')">همه</button>
                        <button class="filter-btn" data-cat="کود طبیعی" onclick="setCategoryFilter('کود طبیعی')">کود طبیعی</button>
                        <button class="filter-btn" data-cat="کود آلی" onclick="setCategoryFilter('کود آلی')">کود آلی</button>
                        <button class="filter-btn" data-cat="بهبوددهنده خاک" onclick="setCategoryFilter('بهبوددهنده خاک')">بهبوددهنده خاک</button>
                        <button class="filter-btn" data-cat="کود مخصوص باغ" onclick="setCategoryFilter('کود مخصوص باغ')">کود مخصوص باغ</button>
                        <button class="filter-btn" data-cat="کود مخصوص زراعت" onclick="setCategoryFilter('کود مخصوص زراعت')">کود مخصوص زراعت</button>
                        <button class="filter-btn" data-cat="کود مخصوص گلخانه" onclick="setCategoryFilter('کود مخصوص گلخانه')">کود مخصوص گلخانه</button>
                    </div>
                </div>
                <div class="products-grid" id="productsGrid"></div>
                <div class="empty-state hidden" id="noProducts">
                    <div style="font-size:3rem;">🔍</div>
                    <p>محصولی یافت نشد.</p>
                </div>
            </div>
        </section>`;
        window.currentCategory = "all";
        filterProducts();
      }

      window.setCategoryFilter = function (cat) {
        window.currentCategory = cat;
        document
          .querySelectorAll(".filter-btn")
          .forEach((b) => b.classList.toggle("active", b.dataset.cat === cat));
        filterProducts();
      };

      window.filterProducts = function () {
        const q = (
          document.getElementById("productSearch")?.value || ""
        ).toLowerCase();
        const cat = window.currentCategory || "all";
        let list = DB.products.filter((p) => p.status === "active");
        if (cat !== "all") list = list.filter((p) => p.category === cat);
        if (q) {
          list = list.filter(
            (p) =>
              p.name.toLowerCase().includes(q) ||
              p.category.toLowerCase().includes(q) ||
              p.shortDesc.toLowerCase().includes(q) ||
              (p.type || "").toLowerCase().includes(q) ||
              (p.suitableFor || "").toLowerCase().includes(q),
          );
        }
        const grid = document.getElementById("productsGrid");
        const empty = document.getElementById("noProducts");
        grid.innerHTML = "";
        if (list.length === 0) {
          empty.classList.remove("hidden");
        } else {
          empty.classList.add("hidden");
          list.forEach((p) => grid.appendChild(createProductCard(p)));
        }
      };

      function renderProductDetail(id) {
        const p = DB.products.find((x) => x.id == id && x.status === "active");
        if (!p) {
          document.getElementById("app").innerHTML = `
            <section class="section" style="padding-top:calc(var(--header-h) + 60px);text-align:center;">
                <div class="container">
                    <div style="font-size:4rem;margin-bottom:20px;">😕</div>
                    <h2>محصول موردنظر پیدا نشد</h2>
                    <p style="color:var(--text-muted);margin:16px 0 28px;">ممکن است محصول حذف شده یا غیرفعال باشد.</p>
                    <button class="btn btn-primary" onclick="navigate('products')">بازگشت به محصولات</button>
                </div>
            </section>`;
          return;
        }
        const related = (p.related || [])
          .map((rid) =>
            DB.products.find((x) => x.id === rid && x.status === "active"),
          )
          .filter(Boolean);
        document.getElementById("app").innerHTML = `
        <section class="product-detail">
            <div class="container">
                <div class="product-detail-header">
                    <div class="product-detail-img">
                        <div class="placeholder-visual" style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:6rem;">🌿</div>
                    </div>
                    <div class="product-detail-info">
                        <div class="cat" data-edit-key="product:${p.id}:category">${escapeHtml(p.category)}</div>
                        <h1 data-edit-key="product:${p.id}:name">${escapeHtml(p.name)}</h1>
                        <p class="short-desc" data-edit-key="product:${p.id}:shortDesc">${escapeHtml(p.shortDesc)}</p>
                        <table class="specs-table">
                            <tr><th>نوع محصول</th><td data-edit-key="product:${p.id}:type">${escapeHtml(p.type)}</td></tr>
                            <tr><th>نوع مصرف</th><td data-edit-key="product:${p.id}:consumptionType">${escapeHtml(p.consumptionType || "-")}</td></tr>
                            <tr><th>وزن / حجم</th><td data-edit-key="product:${p.id}:weight">${escapeHtml(p.weight || "-")}</td></tr>
                            <tr><th>بسته‌بندی</th><td data-edit-key="product:${p.id}:packaging">${escapeHtml(p.packaging)}</td></tr>
                            <tr><th>مناسب برای</th><td data-edit-key="product:${p.id}:suitableFor">${escapeHtml(p.suitableFor)}</td></tr>
                            <tr><th>شکل محصول</th><td data-edit-key="product:${p.id}:form">${escapeHtml(p.form || "-")}</td></tr>
                            <tr><th>ترکیبات</th><td data-edit-key="product:${p.id}:compounds">${escapeHtml(p.compounds || "-")}</td></tr>
                            <tr><th>شرایط نگهداری</th><td data-edit-key="product:${p.id}:storage">${escapeHtml(p.storage || "-")}</td></tr>
                            <tr><th>کشور تولید</th><td data-edit-key="product:${p.id}:country">${escapeHtml(p.country || "ایران")}</td></tr>
                            <tr><th>برند</th><td data-edit-key="product:${p.id}:brand">${escapeHtml(p.brand || "-")}</td></tr>
                        </table>
                        <div style="display:flex;gap:12px;margin-top:20px;flex-wrap:wrap;">
                            <button class="btn btn-primary" onclick="navigate('consult')">درخواست مشاوره</button>
                            <button class="btn btn-outline" onclick="navigate('contact')">تماس با شرکت</button>
                        </div>
                    </div>
                </div>
                <div class="detail-section">
                    <h2>توضیحات کامل</h2>
                    <div class="long-text" data-edit-key="product:${p.id}:fullDesc">${escapeHtml(p.fullDesc || "توضیحاتی ثبت نشده است.")}</div>
                </div>
                <div class="detail-section">
                    <h2>روش مصرف</h2>
                    <div class="steps" data-edit-key="productList:${p.id}:usageSteps" style="white-space:pre-wrap;">${
                          (p.usageSteps || []).map((s, i) => `${i + 1}. ${escapeHtml(s)}`).join("\n") || "مراحل مصرف ثبت نشده است."
                        }</div>
                    <p style="margin-top:16px;color:var(--text-muted);"><strong>نکات مهم:</strong> <span data-edit-key="product:${p.id}:usageNotes">${escapeHtml(p.usageNotes || "")}</span></p>
                </div>
                <div class="detail-section">
                    <h2>مزایا و ویژگی‌ها</h2>
                    <div class="benefits-list" data-edit-key="productList:${p.id}:benefits" style="white-space:pre-wrap;">${
                          (p.benefits || []).map((b) => "• " + escapeHtml(b)).join("\n") || "مزیتی ثبت نشده است."
                        }</div>
                </div>
                <div class="detail-section"><h2>کاربردها</h2><p data-edit-key="product:${p.id}:applications">${escapeHtml(p.applications || "")}</p></div>
                <div class="detail-section"><h2>هشدارها</h2><p style="color:#C62828;" data-edit-key="product:${p.id}:warnings">${escapeHtml(p.warnings || "")}</p></div>
                ${
                  p.faq && p.faq.length
                    ? `
                <div class="detail-section">
                    <h2>سوالات متداول</h2>
                    ${p.faq.map((f) => `<div style="margin-bottom:16px;"><strong>${escapeHtml(f.q)}</strong><p style="color:var(--text-muted);margin-top:4px;">${escapeHtml(f.a)}</p></div>`).join("")}
                </div>`
                    : ""
                }
                ${
                  related.length
                    ? `
                <div class="related-products">
                    <h3>محصولات مرتبط</h3>
                    <div class="products-grid" id="relatedGrid"></div>
                </div>`
                    : ""
                }
            </div>
        </section>`;

        if (related.length) {
          const rg = document.getElementById("relatedGrid");
          related.forEach((r) => rg.appendChild(createProductCard(r)));
        }
        // SEO update
        document.title = `${p.name} | کود طبیعی`;
      }

      function renderAbout() {
        const s = DB.settings;
        document.getElementById("app").innerHTML = `
        <section class="section" style="padding-top:calc(var(--header-h) + 40px);">
            <div class="container">
                <div class="about-grid">
                    <div>
                        <h2>درباره <span data-edit-key="companyName">${escapeHtml(s.companyName)}</span></h2>
                        <p data-edit-key="aboutText">${escapeHtml(s.aboutText)}</p>
                        <div class="about-features">
                            <div class="about-feature"><span style="font-size:1.4rem;">✓</span><span>بیش از ۱۵ سال تجربه در صنعت کود طبیعی</span></div>
                            <div class="about-feature"><span style="font-size:1.4rem;">✓</span><span>محصولات ۱۰۰٪ طبیعی و ارگانیک</span></div>
                            <div class="about-feature"><span style="font-size:1.4rem;">✓</span><span>پشتیبانی تخصصی کشاورزی</span></div>
                            <div class="about-feature"><span style="font-size:1.4rem;">✓</span><span>تضمین کیفیت و اصالت محصول</span></div>
                        </div>
                    </div>
                    <div class="placeholder-visual" style="border-radius:24px;height:360px;display:flex;align-items:center;justify-content:center;font-size:6rem;">🌾</div>
                </div>
            </div>
        </section>`;
      }

      function renderBenefits() {
        document.getElementById("app").innerHTML = `
        <section class="section" style="padding-top:calc(var(--header-h) + 40px);">
            <div class="container">
                <div class="section-header">
                    <h2>مزایای محصولات ما</h2>
                    <p>چرا کشاورزان و باغداران محصولات ما را انتخاب می‌کنند</p>
                </div>
                <div class="benefits-grid">
                    <div class="benefit-card"><div class="benefit-icon">🌱</div><h3>طبیعی و ارگانیک</h3><p>بدون مواد شیمیایی مصنوعی و کاملاً سازگار با استانداردهای ارگانیک</p></div>
                    <div class="benefit-card"><div class="benefit-icon">💧</div><h3>بهبود ساختار خاک</h3><p>افزایش ظرفیت نگهداری آب و تهویه مناسب خاک</p></div>
                    <div class="benefit-card"><div class="benefit-icon">🛡️</div><h3>مقاومت گیاه</h3><p>افزایش مقاومت به بیماری‌ها، آفات و تنش‌های محیطی</p></div>
                    <div class="benefit-card"><div class="benefit-icon">📈</div><h3>افزایش عملکرد</h3><p>محصول بیشتر، با کیفیت‌تر و ماندگاری بالاتر</p></div>
                    <div class="benefit-card"><div class="benefit-icon">🌍</div><h3>پایداری محیط زیست</h3><p>کاهش آلودگی خاک و آب و حفظ اکوسیستم</p></div>
                    <div class="benefit-card"><div class="benefit-icon">🔬</div><h3>فرمول علمی</h3><p>توسعه یافته بر اساس تحقیقات علمی و نیازهای واقعی کشاورزان</p></div>
                </div>
            </div>
        </section>`;
      }

      function renderConsult() {
        const products = DB.products.filter((p) => p.status === "active");
        document.getElementById("app").innerHTML = `
        <section class="section" style="padding-top:calc(var(--header-h) + 40px);">
            <div class="container">
                <div class="section-header">
                    <h2>درخواست مشاوره رایگان</h2>
                    <p>کارشناسان ما آماده راهنمایی شما هستند</p>
                </div>
                <div class="form-card">
                    <div class="form-row">
                        <div class="form-group">
                            <label>نام و نام خانوادگی *</label>
                            <input type="text" id="cName" required>
                        </div>
                        <div class="form-group">
                            <label>شماره موبایل *</label>
                            <input type="tel" id="cMobile" required placeholder="09123456789">
                        </div>
                    </div>
                    <div class="form-group">
                        <label>ایمیل</label>
                        <input type="email" id="cEmail">
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label>محصول موردنظر</label>
                            <select id="cProduct">
                                <option value="">انتخاب کنید</option>
                                ${products.map((p) => `<option value="${p.id}">${escapeHtml(p.name)}</option>`).join("")}
                            </select>
                        </div>
                        <div class="form-group">
                            <label>نوع کشت</label>
                            <select id="cCrop">
                                <option value="">انتخاب کنید</option>
                                <option>زراعت</option>
                                <option>باغ</option>
                                <option>گلخانه</option>
                                <option>فضای سبز</option>
                                <option>سایر</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>زمان مناسب تماس</label>
                        <select id="cTime">
                            <option>هر زمان</option>
                            <option>صبح (۸-۱۲)</option>
                            <option>ظهر (۱۲-۱۶)</option>
                            <option>عصر (۱۶-۲۰)</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>توضیحات</label>
                        <textarea id="cDesc" placeholder="توضیحات بیشتر در مورد نیاز خود بنویسید..."></textarea>
                    </div>
                    <button class="btn btn-primary" style="width:100%;" onclick="submitConsult()">ثبت درخواست مشاوره</button>
                </div>
            </div>
        </section>`;
      }

      window.submitConsult = function () {
        const name = document.getElementById("cName").value.trim();
        const mobile = document.getElementById("cMobile").value.trim();
        if (!name || !mobile) {
          showToast("نام و موبایل الزامی است", "error");
          return;
        }
        const productId = document.getElementById("cProduct").value;
        const product = DB.products.find((p) => p.id == productId);
        DB.consultations.unshift({
          id: Date.now(),
          name,
          mobile,
          email: document.getElementById("cEmail").value.trim(),
          productId: productId || null,
          productName: product ? product.name : "عمومی",
          crop: document.getElementById("cCrop").value,
          time: document.getElementById("cTime").value,
          desc: document.getElementById("cDesc").value.trim(),
          status: "جدید",
          reply: "",
          createdAt: new Date().toLocaleString("fa-IR"),
        });
        DB.stats.consultations++;
        saveDB(DB);
        logActivity("ثبت درخواست مشاوره", name);
        showToast("درخواست مشاوره با موفقیت ثبت شد");
        navigate("home");
      };

      function renderSupport() {
        document.getElementById("app").innerHTML = `
        <section class="section" style="padding-top:calc(var(--header-h) + 40px);">
            <div class="container">
                <div class="section-header">
                    <h2>پشتیبانی</h2>
                    <p>سوال یا مشکلی دارید؟ تیکت ثبت کنید</p>
                </div>
                <div class="form-card">
                    <div class="form-group">
                        <label>موضوع *</label>
                        <input type="text" id="tSubject" required>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label>نام *</label>
                            <input type="text" id="tName" required>
                        </div>
                        <div class="form-group">
                            <label>شماره تماس یا ایمیل *</label>
                            <input type="text" id="tContact" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>اولویت</label>
                        <select id="tPriority">
                            <option value="عادی">عادی</option>
                            <option value="مهم">مهم</option>
                            <option value="فوری">فوری</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>متن پیام *</label>
                        <textarea id="tMessage" required></textarea>
                    </div>
                    <button class="btn btn-primary" style="width:100%;" onclick="submitTicket()">ارسال تیکت</button>
                </div>
            </div>
        </section>`;
      }

      window.submitTicket = function () {
        const subject = document.getElementById("tSubject").value.trim();
        const name = document.getElementById("tName").value.trim();
        const contact = document.getElementById("tContact").value.trim();
        const message = document.getElementById("tMessage").value.trim();
        if (!subject || !name || !contact || !message) {
          showToast("لطفاً تمام فیلدهای الزامی را پر کنید", "error");
          return;
        }
        DB.tickets.unshift({
          id: Date.now(),
          subject,
          name,
          contact,
          priority: document.getElementById("tPriority").value,
          message,
          status: "باز",
          replies: [],
          createdAt: new Date().toLocaleString("fa-IR"),
        });
        saveDB(DB);
        logActivity("ثبت تیکت پشتیبانی", subject);
        showToast("تیکت با موفقیت ثبت شد");
        navigate("home");
      };

      function renderContact() {
        const s = DB.settings;
        document.getElementById("app").innerHTML = `
        <section class="section" style="padding-top:calc(var(--header-h) + 40px);">
            <div class="container">
                <div class="section-header">
                    <h2>تماس با ما</h2>
                    <p>راه‌های ارتباطی با ${escapeHtml(s.companyName)}</p>
                </div>
                <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:24px;max-width:900px;margin:0 auto;">
                    <div class="benefit-card"><div class="benefit-icon">📞</div><h3>تلفن</h3><p>${escapeHtml(s.phone)}</p></div>
                    <div class="benefit-card"><div class="benefit-icon">✉️</div><h3>ایمیل</h3><p>${escapeHtml(s.email)}</p></div>
                    <div class="benefit-card"><div class="benefit-icon">📍</div><h3>آدرس</h3><p>${escapeHtml(s.address)}</p></div>
                    <div class="benefit-card"><div class="benefit-icon">🕐</div><h3>ساعات کاری</h3><p>${s.hours.replace(/\n/g, "<br>")}</p></div>
                </div>
            </div>
        </section>`;
      }

      // ==================== AUTH ====================
      function openLoginModal() {
        document.getElementById("loginModal").classList.add("open");
      }
      function closeModal(id) {
        document.getElementById(id).classList.remove("open");
      }

      window.handleLogin = function () {
        const email = document.getElementById("loginEmail").value.trim();
        const mobile = document.getElementById("loginMobile").value.trim();
        const password = document.getElementById("loginPassword").value;
        if (!email || !mobile || !password) {
          showToast("همه فیلدها الزامی است", "error");
          return;
        }
        let user = DB.users.find(
          (u) => u.email === email || u.mobile === mobile,
        );
        if (user) {
          if (user.password !== password) {
            showToast("رمز عبور اشتباه است", "error");
            return;
          }
          if (user.status === "blocked") {
            showToast("حساب شما مسدود شده است", "error");
            return;
          }
        } else {
          user = {
            id: Date.now(),
            name: email.split("@")[0],
            email,
            mobile,
            password,
            role: "user",
            status: "active",
            createdAt: new Date().toLocaleDateString("fa-IR"),
          };
          DB.users.push(user);
          logActivity("ثبت‌نام کاربر جدید", email);
        }
        DB.currentUser = {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        };
        saveDB(DB);
        closeModal("loginModal");
        showToast("ورود موفقیت‌آمیز بود");
        document.getElementById("adminBtn").style.display =
          user.role === "admin" ? "inline-flex" : "none";
        if (user.role === "admin") {
          showQuickAdminBar();
          syncQuickSeasonSelect();
          if (!window.location.hash || window.location.hash === "#admin") {
            navigate("home");
          } else {
            render();
          }
          showToast("مدیر وارد شد؛ ویرایش مستقیم فعال است");
        }
        logActivity("ورود کاربر", user.email);
      };

      // ==================== ADMIN ====================
      function renderAdmin(page, param) {
        if (!DB.currentUser || DB.currentUser.role !== "admin") {
          document.getElementById("app").innerHTML = `
            <div style="min-height:100vh;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:20px;text-align:center;padding:20px;">
                <h2>دسترسی محدود</h2>
                <p>برای ورود به پنل مدیریت ابتدا وارد شوید.</p>
                <button class="btn btn-primary" onclick="openLoginModal()">ورود</button>
                <button class="btn btn-outline" onclick="navigate('home')">بازگشت به سایت</button>
            </div>`;
          return;
        }
        // Bug fix: this used to be `page === 'admin' ? 'dashboard' : ...`, which is always
        // true (page is always the literal string 'admin' here), so every admin menu item
        // (products, consults, tickets, users, settings, activity) rendered the dashboard
        // no matter what was clicked. The section must come from `param` (e.g. 'products'
        // in the hash 'admin/products').
        const section = param || "dashboard";
        document.getElementById("app").innerHTML = `
        <div class="admin-layout">
            <div class="admin-overlay" id="adminOverlay" onclick="closeAdminSidebar()"></div>
            <aside class="admin-sidebar" id="adminSidebar">
                <div class="logo">
                    <div style="display:flex;align-items:center;gap:10px;"><div class="logo-icon">🌱</div><span>پنل مدیریت</span></div>
                    <button class="btn-icon admin-sidebar-close" onclick="closeAdminSidebar()">×</button>
                </div>
                <nav class="admin-nav">
                    <a href="#admin" class="${section === "dashboard" ? "active" : ""}" onclick="navigate('admin')">📊 داشبورد</a>
                    <a href="#admin/products" class="${section === "products" ? "active" : ""}" onclick="navigate('admin','products')">📦 محصولات</a>
                    <a href="#admin/consults" class="${section === "consults" ? "active" : ""}" onclick="navigate('admin','consults')">💬 مشاوره‌ها</a>
                    <a href="#admin/tickets" class="${section === "tickets" ? "active" : ""}" onclick="navigate('admin','tickets')">🎫 پشتیبانی</a>
                    <a href="#admin/users" class="${section === "users" ? "active" : ""}" onclick="navigate('admin','users')">👥 کاربران</a>
                    <a href="#admin/settings" class="${section === "settings" ? "active" : ""}" onclick="navigate('admin','settings')">⚙️ تنظیمات</a>
                    <a href="#admin/activity" class="${section === "activity" ? "active" : ""}" onclick="navigate('admin','activity')">📋 فعالیت‌ها</a>
                    <a href="#home" onclick="navigate('home')">🏠 بازگشت به سایت</a>
                    <a href="#" onclick="logout()" style="color:#C62828;">🚪 خروج</a>
                </nav>
            </aside>
            <main class="admin-main">
                <div class="admin-mobile-bar">
                    <button class="btn-icon" onclick="toggleAdminSidebar()">☰</button>
                    <div class="logo"><div class="logo-icon">🌱</div><span>پنل مدیریت</span></div>
                    <span style="width:40px;"></span>
                </div>
                <div id="adminContent" style="padding:24px;"></div>
            </main>
        </div>`;
        renderAdminSection(section);
      }

      function renderAdminSection(section) {
        const el = document.getElementById("adminContent");
        switch (section) {
          case "dashboard":
            renderAdminDashboard(el);
            break;
          case "products":
            renderAdminProducts(el);
            break;
          case "consults":
            renderAdminConsults(el);
            break;
          case "tickets":
            renderAdminTickets(el);
            break;
          case "users":
            renderAdminUsers(el);
            break;
          case "settings":
            renderAdminSettings(el);
            break;
          case "activity":
            renderAdminActivity(el);
            break;
          default:
            renderAdminDashboard(el);
        }
      }

      function renderAdminDashboard(el) {
        const newConsults = DB.consultations.filter(
          (c) => c.status === "جدید",
        ).length;
        const openTickets = DB.tickets.filter(
          (t) => t.status === "باز" || t.status === "در حال بررسی",
        ).length;
        const activeProducts = DB.products.filter(
          (p) => p.status === "active",
        ).length;
        el.innerHTML = `
            <div class="admin-header">
                <h1>داشبورد</h1>
                <div style="display:flex;gap:10px;flex-wrap:wrap;">
                    ${newConsults ? `<span class="badge badge-red">${newConsults} مشاوره جدید</span>` : ""}
                    ${openTickets ? `<span class="badge badge-yellow">${openTickets} تیکت باز</span>` : ""}
                </div>
            </div>
            <div class="dashboard-cards">
                <div class="dash-card"><div class="label">محصولات</div><div class="value">${DB.products.length}</div></div>
                <div class="dash-card"><div class="label">محصولات فعال</div><div class="value">${activeProducts}</div></div>
                <div class="dash-card"><div class="label">کاربران</div><div class="value">${DB.users.length}</div></div>
                <div class="dash-card"><div class="label">درخواست‌های مشاوره</div><div class="value">${DB.consultations.length}</div></div>
                <div class="dash-card"><div class="label">تیکت‌های باز</div><div class="value">${openTickets}</div></div>
                <div class="dash-card"><div class="label">فعالیت‌های اخیر</div><div class="value">${DB.activityLog.length}</div></div>
            </div>
            <h3 style="margin-bottom:16px;">فعالیت‌های اخیر</h3>
            <div class="admin-table-wrap">
                <table class="admin-table">
                    <thead><tr><th>زمان</th><th>کاربر</th><th>عملیات</th><th>جزئیات</th></tr></thead>
                    <tbody>
                        ${
                          DB.activityLog
                            .slice(0, 10)
                            .map(
                              (a) => `
                            <tr><td>${a.time}</td><td>${escapeHtml(a.user)}</td><td>${escapeHtml(a.action)}</td><td>${escapeHtml(a.detail)}</td></tr>
                        `,
                            )
                            .join("") ||
                          '<tr><td colspan="4" class="text-center">فعالیتی ثبت نشده</td></tr>'
                        }
                    </tbody>
                </table>
            </div>`;
      }

      function renderAdminProducts(el) {
        el.innerHTML = `
            <div class="admin-header">
                <h1>مدیریت محصولات</h1>
                <button class="btn btn-primary" onclick="openProductModal()">+ محصول جدید</button>
            </div>
            <div class="admin-table-wrap">
                <table class="admin-table">
                    <thead>
                        <tr><th>نام</th><th>دسته‌بندی</th><th>نوع</th><th>وضعیت</th><th>عملیات</th></tr>
                    </thead>
                    <tbody>
                        ${DB.products
                          .map(
                            (p) => `
                            <tr>
                                <td>${escapeHtml(p.name)}</td>
                                <td>${escapeHtml(p.category)}</td>
                                <td>${escapeHtml(p.type)}</td>
                                <td><span class="badge ${p.status === "active" ? "badge-green" : "badge-gray"}">${p.status === "active" ? "فعال" : "غیرفعال"}</span></td>
                                <td>
                                    <button class="btn btn-sm btn-outline" onclick="openProductModal(${p.id})">ویرایش</button>
                                    <button class="btn btn-sm btn-secondary" onclick="toggleProduct(${p.id})">${p.status === "active" ? "غیرفعال" : "فعال"}</button>
                                    <button class="btn btn-sm" style="background:#C62828;color:white;" onclick="deleteProduct(${p.id})">حذف</button>
                                </td>
                            </tr>
                        `,
                          )
                          .join("")}
                    </tbody>
                </table>
            </div>
            <div class="modal-overlay" id="productModal">
                <div class="modal" style="max-width:700px;">
                    <div class="modal-header">
                        <h3 id="productModalTitle">محصول جدید</h3>
                        <button class="modal-close" onclick="closeModal('productModal')">×</button>
                    </div>
                    <div class="modal-body" id="productModalBody"></div>
                    <div class="modal-footer">
                        <button class="btn btn-outline" onclick="closeModal('productModal')">انصراف</button>
                        <button class="btn btn-primary" onclick="saveProduct()">ذخیره</button>
                    </div>
                </div>
            </div>`;
      }

      window.openProductModal = function (id = null) {
        const p = id ? DB.products.find((x) => x.id === id) : null;
        window.editingProductId = id;
        document.getElementById("productModalTitle").textContent = p
          ? "ویرایش محصول"
          : "محصول جدید";
        document.getElementById("productModalBody").innerHTML = `
            <div class="form-group"><label>نام محصول *</label><input id="pName" value="${p ? escapeHtml(p.name) : ""}"></div>
            <div class="form-row">
                <div class="form-group"><label>دسته‌بندی</label>
                    <select id="pCategory">
                        ${[
                          "کود طبیعی",
                          "کود آلی",
                          "بهبوددهنده خاک",
                          "کود مخصوص باغ",
                          "کود مخصوص زراعت",
                          "کود مخصوص گلخانه",
                          "سایر محصولات",
                        ]
                          .map(
                            (c) =>
                              `<option ${p && p.category === c ? "selected" : ""}>${c}</option>`,
                          )
                          .join("")}
                    </select>
                </div>
                <div class="form-group"><label>نوع</label><input id="pType" value="${p ? escapeHtml(p.type) : "جامد"}"></div>
            </div>
            <div class="form-group"><label>توضیح کوتاه</label><textarea id="pShort">${p ? escapeHtml(p.shortDesc) : ""}</textarea></div>
            <div class="form-group"><label>توضیحات کامل (متن طولانی)</label><textarea id="pFull" style="min-height:150px;">${p ? escapeHtml(p.fullDesc) : ""}</textarea></div>
            <div class="form-row">
                <div class="form-group"><label>بسته‌بندی</label><input id="pPack" value="${p ? escapeHtml(p.packaging) : ""}"></div>
                <div class="form-group"><label>مناسب برای</label><input id="pSuitable" value="${p ? escapeHtml(p.suitableFor) : ""}"></div>
            </div>
            <div class="form-row">
                <div class="form-group"><label>وزن</label><input id="pWeight" value="${p ? escapeHtml(p.weight || "") : ""}"></div>
                <div class="form-group"><label>شکل</label><input id="pForm" value="${p ? escapeHtml(p.form || "") : ""}"></div>
            </div>
            <div class="form-group"><label>ترکیبات</label><input id="pCompounds" value="${p ? escapeHtml(p.compounds || "") : ""}"></div>
            <div class="form-group"><label>نوع مصرف</label><input id="pConsumption" value="${p ? escapeHtml(p.consumptionType || "") : ""}"></div>
            <div class="form-group"><label>مراحل مصرف (هر خط یک مرحله)</label><textarea id="pSteps">${p && p.usageSteps ? p.usageSteps.join("\n") : ""}</textarea></div>
            <div class="form-group"><label>نکات مهم مصرف</label><textarea id="pNotes">${p ? escapeHtml(p.usageNotes || "") : ""}</textarea></div>
            <div class="form-group"><label>مزایا (هر خط یک مزیت)</label><textarea id="pBenefits">${p && p.benefits ? p.benefits.join("\n") : ""}</textarea></div>
            <div class="form-group"><label>کاربردها</label><textarea id="pApps">${p ? escapeHtml(p.applications || "") : ""}</textarea></div>
            <div class="form-group"><label>هشدارها</label><textarea id="pWarn">${p ? escapeHtml(p.warnings || "") : ""}</textarea></div>
            <div class="form-group"><label>شرایط نگهداری</label><input id="pStorage" value="${p ? escapeHtml(p.storage || "") : ""}"></div>
            <div class="form-group"><label>وضعیت</label>
                <select id="pStatus"><option value="active" ${!p || p.status === "active" ? "selected" : ""}>فعال</option><option value="inactive" ${p && p.status === "inactive" ? "selected" : ""}>غیرفعال</option></select>
            </div>`;
        document.getElementById("productModal").classList.add("open");
      };

      window.saveProduct = function () {
        const name = document.getElementById("pName").value.trim();
        if (!name) {
          showToast("نام محصول الزامی است", "error");
          return;
        }
        const data = {
          name,
          category: document.getElementById("pCategory").value,
          shortDesc: document.getElementById("pShort").value.trim(),
          fullDesc: document.getElementById("pFull").value.trim(),
          type: document.getElementById("pType").value.trim(),
          packaging: document.getElementById("pPack").value.trim(),
          suitableFor: document.getElementById("pSuitable").value.trim(),
          weight: document.getElementById("pWeight").value.trim(),
          form: document.getElementById("pForm").value.trim(),
          compounds: document.getElementById("pCompounds").value.trim(),
          consumptionType: document.getElementById("pConsumption").value.trim(),
          usageSteps: document
            .getElementById("pSteps")
            .value.trim()
            .split("\n")
            .filter(Boolean),
          usageNotes: document.getElementById("pNotes").value.trim(),
          benefits: document
            .getElementById("pBenefits")
            .value.trim()
            .split("\n")
            .filter(Boolean),
          applications: document.getElementById("pApps").value.trim(),
          warnings: document.getElementById("pWarn").value.trim(),
          storage: document.getElementById("pStorage").value.trim(),
          status: document.getElementById("pStatus").value,
        };
        if (window.editingProductId) {
          // Bug fix: this used to always reset `faq` and `related` to empty arrays,
          // silently wiping out a product's FAQ and related-product links every time
          // it was edited. Existing values are now preserved.
          const idx = DB.products.findIndex(
            (p) => p.id === window.editingProductId,
          );
          DB.products[idx] = { ...DB.products[idx], ...data };
          logActivity("ویرایش محصول", name);
        } else {
          data.id = Date.now();
          data.image = "";
          data.country = "ایران";
          data.brand = DB.settings.companyName;
          data.faq = [];
          data.related = [];
          DB.products.push(data);
          DB.stats.products = DB.products.length;
          logActivity("ایجاد محصول", name);
        }
        saveDB(DB);
        closeModal("productModal");
        showToast("محصول ذخیره شد");
        renderAdminSection("products");
      };

      window.toggleProduct = function (id) {
        const p = DB.products.find((x) => x.id === id);
        if (p) {
          p.status = p.status === "active" ? "inactive" : "active";
          saveDB(DB);
          logActivity("تغییر وضعیت محصول", p.name);
          renderAdminSection("products");
        }
      };

      window.deleteProduct = function (id) {
        if (!confirm("آیا از حذف این محصول مطمئن هستید؟")) return;
        const p = DB.products.find((x) => x.id === id);
        DB.products = DB.products.filter((x) => x.id !== id);
        DB.stats.products = DB.products.length;
        saveDB(DB);
        logActivity("حذف محصول", p ? p.name : id);
        showToast("محصول حذف شد");
        renderAdminSection("products");
      };

      function renderAdminConsults(el) {
        el.innerHTML = `
            <div class="admin-header"><h1>درخواست‌های مشاوره</h1></div>
            <div class="admin-table-wrap">
                <table class="admin-table">
                    <thead><tr><th>نام</th><th>موبایل</th><th>محصول</th><th>وضعیت</th><th>تاریخ</th><th>عملیات</th></tr></thead>
                    <tbody>
                        ${
                          DB.consultations
                            .map(
                              (c) => `
                            <tr>
                                <td>${escapeHtml(c.name)}</td>
                                <td>${escapeHtml(c.mobile)}</td>
                                <td>${escapeHtml(c.productName)}</td>
                                <td><span class="badge ${c.status === "جدید" ? "badge-red" : c.status === "پاسخ داده شد" ? "badge-green" : "badge-yellow"}">${c.status}</span></td>
                                <td>${c.createdAt}</td>
                                <td>
                                    <button class="btn btn-sm btn-outline" onclick="viewConsult(${c.id})">مشاهده</button>
                                    <select onchange="updateConsultStatus(${c.id}, this.value)" style="padding:4px 8px;border-radius:6px;border:1px solid var(--border);">
                                        <option ${c.status === "جدید" ? "selected" : ""}>جدید</option>
                                        <option ${c.status === "در حال بررسی" ? "selected" : ""}>در حال بررسی</option>
                                        <option ${c.status === "پاسخ داده شد" ? "selected" : ""}>پاسخ داده شد</option>
                                        <option ${c.status === "بسته" ? "selected" : ""}>بسته</option>
                                    </select>
                                </td>
                            </tr>
                        `,
                            )
                            .join("") ||
                          '<tr><td colspan="6" class="text-center">درخواستی وجود ندارد</td></tr>'
                        }
                    </tbody>
                </table>
            </div>`;
      }

      window.updateConsultStatus = function (id, status) {
        const c = DB.consultations.find((x) => x.id === id);
        if (c) {
          c.status = status;
          saveDB(DB);
          logActivity("تغییر وضعیت مشاوره", c.name + " → " + status);
          showToast("وضعیت به‌روز شد");
        }
      };

      window.viewConsult = function (id) {
        const c = DB.consultations.find((x) => x.id === id);
        if (!c) return;
        alert(
          `نام: ${c.name}\nموبایل: ${c.mobile}\nایمیل: ${c.email || "-"}\nمحصول: ${c.productName}\nنوع کشت: ${c.crop || "-"}\nزمان تماس: ${c.time}\nتوضیحات: ${c.desc || "-"}`,
        );
      };

      function renderAdminTickets(el) {
        el.innerHTML = `
            <div class="admin-header"><h1>تیکت‌های پشتیبانی</h1></div>
            <div class="admin-table-wrap">
                <table class="admin-table">
                    <thead><tr><th>موضوع</th><th>نام</th><th>اولویت</th><th>وضعیت</th><th>تاریخ</th><th>عملیات</th></tr></thead>
                    <tbody>
                        ${
                          DB.tickets
                            .map(
                              (t) => `
                            <tr>
                                <td>${escapeHtml(t.subject)}</td>
                                <td>${escapeHtml(t.name)}</td>
                                <td><span class="badge ${t.priority === "فوری" ? "badge-red" : t.priority === "مهم" ? "badge-yellow" : "badge-blue"}">${t.priority}</span></td>
                                <td><span class="badge ${t.status === "باز" ? "badge-red" : t.status === "بسته" ? "badge-green" : "badge-yellow"}">${t.status}</span></td>
                                <td>${t.createdAt}</td>
                                <td>
                                    <button class="btn btn-sm btn-outline" onclick="viewTicket(${t.id})">مشاهده</button>
                                    <select onchange="updateTicketStatus(${t.id}, this.value)" style="padding:4px 8px;border-radius:6px;border:1px solid var(--border);">
                                        <option ${t.status === "باز" ? "selected" : ""}>باز</option>
                                        <option ${t.status === "در حال بررسی" ? "selected" : ""}>در حال بررسی</option>
                                        <option ${t.status === "بسته" ? "selected" : ""}>بسته</option>
                                    </select>
                                </td>
                            </tr>
                        `,
                            )
                            .join("") ||
                          '<tr><td colspan="6" class="text-center">تیکتی وجود ندارد</td></tr>'
                        }
                    </tbody>
                </table>
            </div>`;
      }

      window.updateTicketStatus = function (id, status) {
        const t = DB.tickets.find((x) => x.id === id);
        if (t) {
          t.status = status;
          saveDB(DB);
          logActivity("تغییر وضعیت تیکت", t.subject);
          showToast("وضعیت به‌روز شد");
        }
      };

      window.viewTicket = function (id) {
        const t = DB.tickets.find((x) => x.id === id);
        if (!t) return;
        alert(
          `موضوع: ${t.subject}\nنام: ${t.name}\nتماس: ${t.contact}\nاولویت: ${t.priority}\nپیام:\n${t.message}`,
        );
      };

      function renderAdminUsers(el) {
        el.innerHTML = `
            <div class="admin-header"><h1>مدیریت کاربران</h1></div>
            <div class="admin-table-wrap">
                <table class="admin-table">
                    <thead><tr><th>نام</th><th>ایمیل</th><th>موبایل</th><th>نقش</th><th>وضعیت</th><th>تاریخ عضویت</th><th>عملیات</th></tr></thead>
                    <tbody>
                        ${DB.users
                          .map(
                            (u) => `
                            <tr>
                                <td>${escapeHtml(u.name)}</td>
                                <td>${escapeHtml(u.email)}</td>
                                <td>${escapeHtml(u.mobile)}</td>
                                <td>${u.role === "admin" ? "مدیر" : "کاربر"}</td>
                                <td><span class="badge ${u.status === "active" ? "badge-green" : "badge-red"}">${u.status === "active" ? "فعال" : "مسدود"}</span></td>
                                <td>${u.createdAt}</td>
                                <td>
                                    ${u.role !== "admin" ? `<button class="btn btn-sm btn-secondary" onclick="toggleUser(${u.id})">${u.status === "active" ? "مسدود" : "رفع مسدودی"}</button>` : "-"}
                                </td>
                            </tr>
                        `,
                          )
                          .join("")}
                    </tbody>
                </table>
            </div>`;
      }

      window.toggleUser = function (id) {
        const u = DB.users.find((x) => x.id === id);
        if (u && u.role !== "admin") {
          u.status = u.status === "active" ? "blocked" : "active";
          saveDB(DB);
          logActivity("تغییر وضعیت کاربر", u.email);
          renderAdminSection("users");
          showToast("وضعیت کاربر تغییر کرد");
        }
      };

      function renderAdminSettings(el) {
        const s = DB.settings;
        el.innerHTML = `
            <div class="admin-header"><h1>تنظیمات سایت</h1></div>
            <div class="form-card" style="max-width:700px;">
                <div class="form-group"><label>نام شرکت</label><input id="sName" value="${escapeHtml(s.companyName)}"></div>
                <div class="form-group"><label>تلفن</label><input id="sPhone" value="${escapeHtml(s.phone)}"></div>
                <div class="form-group"><label>ایمیل</label><input id="sEmail" value="${escapeHtml(s.email)}"></div>
                <div class="form-group"><label>آدرس</label><input id="sAddress" value="${escapeHtml(s.address)}"></div>
                <div class="form-group"><label>ساعات کاری</label><textarea id="sHours">${escapeHtml(s.hours)}</textarea></div>
                <div class="form-group"><label>عنوان Hero</label><input id="sHeroTitle" value="${escapeHtml(s.heroTitle)}"></div>
                <div class="form-group"><label>توضیح Hero</label><textarea id="sHeroDesc">${escapeHtml(s.heroDesc)}</textarea></div>
                <div class="form-group"><label>متن درباره ما</label><textarea id="sAbout">${escapeHtml(s.aboutText)}</textarea></div>
                <div class="form-group"><label>توضیح فوتر</label><textarea id="sFooter">${escapeHtml(s.footerDesc)}</textarea></div>
                <div class="form-row">
                    <div class="form-group"><label>حالت تم فصلی</label>
                        <select id="sSeasonMode" onchange="document.getElementById('sSeason').disabled = this.value !== 'manual';">
                          <option value="auto" ${s.seasonalMode === "auto" ? "selected" : ""}>خودکار بر اساس ماه</option>
                          <option value="manual" ${s.seasonalMode === "manual" ? "selected" : ""}>انتخاب دستی</option>
                        </select>
                    </div>
                    <div class="form-group"><label>فصل انتخابی</label>
                        <select id="sSeason" ${s.seasonalMode !== "manual" ? "disabled" : ""}>
                          <option value="spring">🌸 بهار</option>
                          <option value="summer">☀️ تابستان</option>
                          <option value="autumn">🍂 پاییز</option>
                          <option value="winter">❄️ زمستان</option>
                        </select>
                    </div>
                </div>
                <h3 style="margin:24px 0 12px;">آمار صفحه اصلی</h3>
                <div class="form-row">
                    <div class="form-group"><label>تعداد محصولات</label><input type="number" id="stProducts" value="${DB.stats.products}"></div>
                    <div class="form-group"><label>تعداد مشتریان</label><input type="number" id="stCustomers" value="${DB.stats.customers}"></div>
                </div>
                <div class="form-row">
                    <div class="form-group"><label>درخواست مشاوره</label><input type="number" id="stConsults" value="${DB.stats.consultations}"></div>
                    <div class="form-group"><label>سال فعالیت</label><input type="number" id="stYears" value="${DB.stats.years}"></div>
                </div>
                <button class="btn btn-primary" style="width:100%;margin-top:16px;" onclick="saveSettings()">ذخیره تنظیمات</button>
            </div>`;
        document.getElementById("sSeason").value = s.manualSeason;
      }

      window.saveSettings = function () {
        DB.settings.companyName = document.getElementById("sName").value.trim();
        DB.settings.phone = document.getElementById("sPhone").value.trim();
        DB.settings.email = document.getElementById("sEmail").value.trim();
        DB.settings.address = document.getElementById("sAddress").value.trim();
        DB.settings.hours = document.getElementById("sHours").value.trim();
        DB.settings.heroTitle = document
          .getElementById("sHeroTitle")
          .value.trim();
        DB.settings.heroDesc = document
          .getElementById("sHeroDesc")
          .value.trim();
        DB.settings.aboutText = document.getElementById("sAbout").value.trim();
        DB.settings.footerDesc = document
          .getElementById("sFooter")
          .value.trim();
        DB.settings.seasonalMode = document.getElementById("sSeasonMode").value;
        DB.settings.manualSeason = document.getElementById("sSeason").value;
        DB.stats.products =
          parseInt(document.getElementById("stProducts").value) || 0;
        DB.stats.customers =
          parseInt(document.getElementById("stCustomers").value) || 0;
        DB.stats.consultations =
          parseInt(document.getElementById("stConsults").value) || 0;
        DB.stats.years =
          parseInt(document.getElementById("stYears").value) || 0;
        saveDB(DB);
        updateSiteTexts();
        applySeasonTheme();
        syncQuickSeasonSelect();
        logActivity("تغییر تنظیمات سایت");
        showToast("تنظیمات ذخیره شد");
      };

      function renderAdminActivity(el) {
        el.innerHTML = `
            <div class="admin-header"><h1>گزارش فعالیت‌ها</h1></div>
            <div class="admin-table-wrap">
                <table class="admin-table">
                    <thead><tr><th>زمان</th><th>کاربر</th><th>عملیات</th><th>جزئیات</th></tr></thead>
                    <tbody>
                        ${
                          DB.activityLog
                            .map(
                              (a) => `
                            <tr><td>${a.time}</td><td>${escapeHtml(a.user)}</td><td>${escapeHtml(a.action)}</td><td>${escapeHtml(a.detail)}</td></tr>
                        `,
                            )
                            .join("") ||
                          '<tr><td colspan="4" class="text-center">فعالیتی ثبت نشده</td></tr>'
                        }
                    </tbody>
                </table>
            </div>`;
      }

      window.logout = function () {
        DB.currentUser = null;
        saveDB(DB);
        document.getElementById("adminBtn").style.display = "none";
        inlineEditActive = false;
        clearInlineEditableElements();
        hideQuickAdminBar();
        showToast("خروج انجام شد");
        navigate("home");
      };
