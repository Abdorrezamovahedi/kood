// ==================== DATA & STORAGE ====================
      const STORAGE_KEY = "naturalFertilizerDB";

      const defaultData = {
        settings: {
          companyName: "کود ارگانیک",
          phone: "۰۲۱-۱۲۳۴۵۶۷۸",
          email: "info@organicfert.ir",
          address: "تهران، خیابان کشاورزی، پلاک ۱۲",
          hours: "شنبه تا چهارشنبه: ۸ صبح تا ۵ عصر\nپنجشنبه: ۸ صبح تا ۱ ظهر",
          heroTitle: "برای خاک بهتر، انتخاب هوشمندانه‌تر",
          heroDesc:
            "ما با تولید کودهای ارگانیک و طبیعی، به کشاورزان کمک می‌کنیم تا خاک سالم‌تر، محصول بیشتر و کشاورزی پایدارتری داشته باشند.",
          heroBtn1: "مشاهده محصولات",
          heroBtn2: "درخواست مشاوره",
          heroCardTitle: "کودهای ارگانیک با کیفیت",
          heroCardDesc: "تضمین سلامت خاک و افزایش عملکرد محصول با فرمول‌های علمی و طبیعی",
          heroFeaturedProductId: 1,
          heroFeaturedImage: "",
          aboutText:
            "شرکت کود ارگانیک با بیش از ۱۵ سال سابقه در تولید و عرضه کودهای ارگانیک و طبیعی، متعهد به ارائه محصولات با کیفیت و سازگار با محیط زیست است. ما از بهترین مواد اولیه طبیعی استفاده می‌کنیم تا سلامت خاک و گیاهان شما تضمین شود.",
          aboutImage: "",
          aboutFeature1: "بیش از ۱۵ سال تجربه در صنعت کود ارگانیک",
          aboutFeature2: "محصولات ۱۰۰٪ طبیعی و ارگانیک",
          aboutFeature3: "پشتیبانی تخصصی کشاورزی",
          aboutFeature4: "تضمین کیفیت و اصالت محصول",
          footerDesc:
            "تولید و عرضه کودهای ارگانیک و طبیعی با کیفیت بالا برای کشاورزی پایدار، باغ‌ها و گلخانه‌ها.",
          homeProductsTitle: "محصولات منتخب",
          homeProductsDesc: "برخی از بهترین محصولات کود ارگانیک ما",
          homeWhyTitle: "چرا کود ارگانیک؟",
          homeWhyDesc: "مزایای استفاده از محصولات ارگانیک و طبیعی ما",
          productsPageTitle: "محصولات ما",
          productsPageDesc: "مجموعه کامل کودهای ارگانیک و طبیعی",
          benefitsPageTitle: "مزایای محصولات ما",
          benefitsPageDesc: "چرا کشاورزان و باغداران محصولات ما را انتخاب می‌کنند",
          benefit1Title: "طبیعی و ارگانیک",
          benefit1Desc: "بدون مواد شیمیایی مصنوعی و کاملاً سازگار با استانداردهای ارگانیک",
          benefit2Title: "بهبود ساختار خاک",
          benefit2Desc: "افزایش ظرفیت نگهداری آب و تهویه مناسب خاک",
          benefit3Title: "مقاومت گیاه",
          benefit3Desc: "افزایش مقاومت به بیماری‌ها، آفات و تنش‌های محیطی",
          benefit4Title: "افزایش عملکرد",
          benefit4Desc: "محصول بیشتر، با کیفیت‌تر و ماندگاری بالاتر",
          benefit5Title: "پایداری محیط زیست",
          benefit5Desc: "کاهش آلودگی خاک و آب و حفظ اکوسیستم",
          benefit6Title: "فرمول علمی",
          benefit6Desc: "توسعه یافته بر اساس تحقیقات علمی و نیازهای واقعی کشاورزان",
          homeBenefit1Title: "سازگار با محیط زیست",
          homeBenefit1Desc: "بدون مواد شیمیایی مضر و کاملاً طبیعی",
          homeBenefit2Title: "بهبود سلامت خاک",
          homeBenefit2Desc: "افزایش ماده آلی و فعالیت میکروبی خاک",
          homeBenefit3Title: "افزایش عملکرد",
          homeBenefit3Desc: "محصول بیشتر و با کیفیت‌تر",
          homeBenefit4Title: "مقاومت بیشتر",
          homeBenefit4Desc: "افزایش مقاومت گیاه به تنش‌ها",
          consultTitle: "درخواست مشاوره رایگان",
          consultDesc: "کارشناسان ما آماده راهنمایی شما در انتخاب محصول مناسب هستند",
          supportTitle: "پشتیبانی",
          supportDesc: "سوال یا مشکلی دارید؟ پیام خود را ثبت کنید",
          contactTitle: "تماس با ما",
          contactDesc: "راه‌های ارتباطی با ما",
          socials: { instagram: "#", telegram: "#", whatsapp: "#" },
          seasonalMode: "auto",
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
        categories: [
          "کود ارگانیک",
          "کود آلی",
          "بهبوددهنده خاک",
          "کود مخصوص باغ",
          "کود مخصوص زراعت",
          "کود مخصوص گلخانه",
        ],
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
            images: [],
            video: "",
            weight: "۲۵ کیلوگرم",
            form: "گرانول",
            compounds: "مواد آلی، نیتروژن، فسفر، پتاسیم، ریزمغذی‌ها",
            storage: "در جای خشک و خنک نگهداری شود",
            country: "ایران",
            brand: "کود ارگانیک",
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
            category: "کود ارگانیک",
            shortDesc:
              "محلول غذایی طبیعی از عصاره جلبک دریایی برای تقویت رشد و مقاومت گیاهان.",
            type: "مایع",
            packaging: "بطری ۱ لیتری و ۵ لیتری",
            suitableFor: "گلخانه، باغ، آپارتمانی",
            status: "active",
            image: "",
            images: [],
            video: "",
            weight: "۱ لیتر",
            form: "مایع",
            compounds: "عصاره جلبک دریایی، هورمون‌های طبیعی رشد، آمینواسیدها",
            storage: "دور از نور مستقیم خورشید و یخ‌زدگی",
            country: "ایران",
            brand: "کود ارگانیک",
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
            images: [],
            video: "",
            weight: "۲۰ کیلوگرم",
            form: "پودری",
            compounds: "هومیک اسید، فولویک اسید، مواد آلی",
            storage: "در جای خشک",
            country: "ایران",
            brand: "کود ارگانیک",
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
            images: [],
            video: "",
            weight: "۱۰ کیلوگرم",
            form: "گرانول",
            compounds: "N-P-K متعادل + ریزمغذی‌ها + مواد آلی",
            storage: "جای خشک و خنک",
            country: "ایران",
            brand: "کود ارگانیک",
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
            name: "مالک سیستم",
            email: "admin@natural.ir",
            mobile: "09120000000",
            password: "admin123",
            role: "owner",
            status: "active",
            permissions: [],
            avatar: "profile1",
            createdAt: "2024-01-01",
          },
        ],
        quickLinks: [],
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
            const merged = {
              ...defaultData,
              ...data,
              settings: { ...defaultData.settings, ...data.settings },
              stats: { ...defaultData.stats, ...data.stats },
              categories: Array.isArray(data.categories) && data.categories.length
                ? data.categories
                : (defaultData.categories || []),
            };
            // migrate products media fields
            if (Array.isArray(merged.products)) {
              merged.products = merged.products.map((p) => ({
                ...p,
                images: Array.isArray(p.images)
                  ? p.images
                  : p.image
                    ? [p.image]
                    : [],
                video: p.video || "",
              }));
            }
            // migrate users: first admin -> owner if no owner; permissions array
            if (Array.isArray(merged.users)) {
              const hasOwner = merged.users.some((u) => u.role === "owner");
              merged.users = merged.users.map((u, i) => {
                let role = u.role;
                if (!hasOwner && role === "admin" && i === 0) role = "owner";
                return {
                  ...u,
                  role,
                  permissions: Array.isArray(u.permissions)
                    ? u.permissions
                    : role === "admin"
                      ? ["dashboard","products","support","users","settings","activity","quick_admin","inline_edit","pages_edit","media","hero_feature","about_image"]
                      : [],
                };
              });
            }
            // migrate currentUser permissions
            if (merged.currentUser) {
              const full = merged.users.find((u) => u.id === merged.currentUser.id);
              if (full) {
                merged.currentUser.role = full.role;
                merged.currentUser.permissions = full.permissions || [];
              }
            }
            return merged;
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


      function getAllCategories() {
        const set = new Set(DB.categories || []);
        (DB.products || []).forEach((p) => {
          if (p.category && String(p.category).trim()) set.add(String(p.category).trim());
        });
        return Array.from(set);
      }

      function productsInCategory(cat, onlyActive) {
        return (DB.products || []).filter((p) => {
          if (p.category !== cat) return false;
          if (onlyActive && p.status !== "active") return false;
          return true;
        });
      }

      function buildCategoryShelf(cat, products) {
        if (!products || !products.length) return "";
        const trackId = "shelf_" + String(cat).replace(/\s+/g, "_").replace(/[^\w\u0600-\u06FF]/g, "");
        const cards = products
          .map((p) => {
            const img = (p.images && p.images[0]) || p.image || "";
            return (
              '<div class="product-card shelf-card">' +
              '<div class="product-card-img">' +
              (img
                ? '<img src="' + img + '" alt="" loading="lazy" style="width:100%;height:100%;object-fit:cover;" />'
                : '<div class="placeholder-visual" style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:3rem;">🌿</div>') +
              '<span class="product-card-badge">' + escapeHtml(p.category || "") + "</span></div>" +
              '<div class="product-card-body">' +
              '<div class="product-card-cat">' + escapeHtml(p.category || "") + "</div>" +
              "<h3>" + escapeHtml(p.name || "") + "</h3>" +
              "<p>" + escapeHtml(p.shortDesc || "") + "</p>" +
              '<div class="product-card-actions">' +
              '<button class="btn btn-primary btn-sm" onclick="navigate(\'product\', ' + p.id + ')">مشاهده</button> ' +
              '<button class="btn btn-outline btn-sm" onclick="navigate(\'consult\')">مشاوره</button>' +
              "</div></div></div>"
            );
          })
          .join("");
        return (
          '<div class="cat-shelf">' +
          '<div class="cat-shelf-head">' +
          '<h3 class="cat-shelf-title">' + escapeHtml(cat) + "</h3>" +
          '<div class="cat-shelf-nav">' +
          '<button type="button" class="shelf-nav-btn" onclick="scrollShelf(\'' + trackId + '\',-1)">‹</button>' +
          '<button type="button" class="shelf-nav-btn" onclick="scrollShelf(\'' + trackId + '\',1)">›</button>' +
          "</div></div>" +
          '<div class="cat-shelf-track" id="' + trackId + '" dir="ltr">' + cards + "</div></div>"
        );
      }

      window.scrollShelf = function (trackId, dir) {
        const track = document.getElementById(trackId);
        if (!track) return;
        const card = track.querySelector(".shelf-card");
        const w = card ? card.offsetWidth + 16 : 280;
        track.scrollBy({ left: dir * w, behavior: "smooth" });
      };

      // ==================== QUICK ADMIN / INLINE EDITOR ====================
      // Site-level settings keys that can be edited inline anywhere they appear
      const INLINE_SETTINGS_FIELDS = [
        "companyName", "phone", "email", "address", "hours",
        "heroTitle", "heroDesc", "heroBtn1", "heroBtn2", "heroCardTitle", "heroCardDesc",
        "footerDesc", "aboutText",
        "aboutFeature1", "aboutFeature2", "aboutFeature3", "aboutFeature4",
        "homeProductsTitle", "homeProductsDesc", "homeWhyTitle", "homeWhyDesc",
        "productsPageTitle", "productsPageDesc",
        "benefitsPageTitle", "benefitsPageDesc",
        "benefit1Title", "benefit1Desc", "benefit2Title", "benefit2Desc",
        "benefit3Title", "benefit3Desc", "benefit4Title", "benefit4Desc",
        "benefit5Title", "benefit5Desc", "benefit6Title", "benefit6Desc",
        "homeBenefit1Title", "homeBenefit1Desc", "homeBenefit2Title", "homeBenefit2Desc",
        "homeBenefit3Title", "homeBenefit3Desc", "homeBenefit4Title", "homeBenefit4Desc",
        "consultTitle", "consultDesc", "supportTitle", "supportDesc",
        "contactTitle", "contactDesc",
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

      // All admin panel permission keys (owner manages these for staff)
      const ALL_PERMISSIONS = [
        { key: "dashboard", label: "داشبورد" },
        { key: "products", label: "مدیریت محصولات" },
        { key: "support", label: "پشتیبانی (مشاوره + تیکت)" },
        { key: "users", label: "مدیریت کاربران و دسترسی‌ها" },
        { key: "settings", label: "تنظیمات و محتوای صفحات" },
        { key: "activity", label: "گزارش فعالیت‌ها" },
        { key: "quick_admin", label: "نمایش باکس مدیریت سریع" },
        { key: "inline_edit", label: "ویرایش مستقیم متن‌های سایت" },
        { key: "pages_edit", label: "ویرایش محتوای صفحات (پنل مدیریت)" },
        { key: "media", label: "آپلود عکس و ویدیو محصول" },
        { key: "hero_feature", label: "انتخاب محصول ویژه صفحه اصلی" },
        { key: "about_image", label: "تصویر بخش درباره ما" },
      ];

      function isStaff() {
        return !!(
          DB.currentUser &&
          (DB.currentUser.role === "owner" || DB.currentUser.role === "admin")
        );
      }

      function isOwner() {
        return !!(DB.currentUser && DB.currentUser.role === "owner");
      }

      function isAdmin() {
        // backward-compatible: any staff with admin/owner
        return isStaff();
      }

      function hasPermission(key) {
        if (!DB.currentUser) return false;
        if (DB.currentUser.role === "owner") return true;
        if (DB.currentUser.role !== "admin") return false;
        const perms = DB.currentUser.permissions || [];
        return perms.includes(key);
      }

      function showQuickAdminBar() {
        const bar = document.getElementById("quickAdminBar");
        const fab = document.getElementById("quickAdminFab");
        if (!isStaff() || !hasPermission("quick_admin")) {
          hideQuickAdminBar();
          return;
        }
        const collapsed = localStorage.getItem("qaBarCollapsed") === "1";
        if (collapsed) {
          if (bar) {
            bar.classList.remove("visible");
            bar.classList.add("collapsed");
          }
          if (fab) fab.classList.add("visible");
        } else {
          if (bar) {
            bar.classList.add("visible");
            bar.classList.remove("collapsed");
          }
          if (fab) fab.classList.remove("visible");
        }
        syncQuickSeasonSelect();
      }

      function hideQuickAdminBar() {
        const bar = document.getElementById("quickAdminBar");
        const fab = document.getElementById("quickAdminFab");
        const hint = document.getElementById("adminEditHint");
        if (bar) {
          bar.classList.remove("visible");
          bar.classList.add("collapsed");
        }
        if (fab) fab.classList.remove("visible");
        if (hint) hint.classList.remove("visible");
        document.body.classList.remove("inline-editing-active");
      }

      function minimizeQuickAdminBar() {
        localStorage.setItem("qaBarCollapsed", "1");
        const bar = document.getElementById("quickAdminBar");
        const fab = document.getElementById("quickAdminFab");
        const hint = document.getElementById("adminEditHint");
        if (hint) hint.classList.remove("visible");
        if (bar) {
          bar.classList.add("qa-shrinking");
          setTimeout(() => {
            bar.classList.remove("visible", "qa-shrinking");
            bar.classList.add("collapsed");
            if (fab) {
              fab.classList.add("visible", "qa-fab-pop");
              setTimeout(() => fab.classList.remove("qa-fab-pop"), 600);
            }
          }, 420);
        } else if (fab) {
          fab.classList.add("visible");
        }
      }

      function expandQuickAdminBar() {
        localStorage.setItem("qaBarCollapsed", "0");
        const bar = document.getElementById("quickAdminBar");
        const fab = document.getElementById("quickAdminFab");
        if (bar) {
          bar.classList.add("visible");
          bar.classList.remove("collapsed");
        }
        if (fab) fab.classList.remove("visible");
      }

      window.minimizeQuickAdminBar = minimizeQuickAdminBar;
      window.expandQuickAdminBar = expandQuickAdminBar;


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
        if (!isStaff() || !hasPermission("inline_edit")) {
          showToast("دسترسی ویرایش مستقیم ندارید", "error");
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
        updateAuthUI();
        if (DB.currentUser && (DB.currentUser.role === "admin" || DB.currentUser.role === "owner")) {
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
          updateSupportFabVisibility();
          renderAdmin(page, param);
          return;
        }

        header.style.display = "";
        footer.style.display = "";
        updateSupportFabVisibility();

        if (isStaff()) {
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

        if (isStaff() && inlineEditActive) {
          bindInlineEditableElements();
        }
        initRevealAnimations();
      }

      // ==================== PUBLIC PAGES ====================
      function renderHome() {
        const s = DB.settings;
        const stats = DB.stats;
        const products = DB.products
          .filter((p) => p.status === "active")
          .slice(0, 3);
        const featId = s.heroFeaturedProductId;
        const featured =
          DB.products.find((p) => p.id == featId && p.status === "active") ||
          DB.products.find((p) => p.status === "active");
        // اولویت عکس: تصویر اختصاصی کارت ویژه > عکس محصول > خالی
        const featImg =
          s.heroFeaturedImage ||
          (featured &&
            ((featured.images && featured.images[0]) || featured.image)) ||
          "";
        const featTitle = s.heroCardTitle || (featured ? featured.name : "محصول ویژه");
        const featDesc = s.heroCardDesc || (featured ? featured.shortDesc : "");
        document.getElementById("app").innerHTML = `
        <section class="hero">
            <div class="container hero-grid">
                <div class="hero-content fade-in">
                    <h1 data-edit-key="heroTitle">${escapeHtml(s.heroTitle)}</h1>
                    <p data-edit-key="heroDesc">${escapeHtml(s.heroDesc)}</p>
                    <div class="hero-btns">
                        <button class="btn btn-primary" onclick="navigate('products')"><span data-edit-key="heroBtn1">${escapeHtml(s.heroBtn1 || "مشاهده محصولات")}</span></button>
                        <button class="btn btn-outline" onclick="navigate('consult')"><span data-edit-key="heroBtn2">${escapeHtml(s.heroBtn2 || "درخواست مشاوره")}</span></button>
                    </div>
                </div>
                <div class="hero-visual fade-in">
                    <div class="hero-card live-float">
                        <span class="hero-card-badge">محصول ویژه</span>
                        ${
                          featImg
                            ? `<img src="${featImg}" alt="${escapeHtml(featTitle)}" style="width:100%;height:180px;object-fit:cover;border-radius:16px;margin-bottom:16px;" />`
                            : `<div class="placeholder-visual" style="height:180px;border-radius:16px;display:flex;align-items:center;justify-content:center;font-size:4rem;margin-bottom:16px;">🌿</div>`
                        }
                        <h3 data-edit-key="heroCardTitle">${escapeHtml(s.heroCardTitle || featTitle)}</h3>
                        <p data-edit-key="heroCardDesc">${escapeHtml(s.heroCardDesc || featDesc)}</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="container">
                <div class="section-header">
                    <h2 data-edit-key="homeProductsTitle">${escapeHtml(s.homeProductsTitle || "محصولات منتخب")}</h2>
                    <p data-edit-key="homeProductsDesc">${escapeHtml(s.homeProductsDesc || "")}</p>
                </div>
                <div id="homeCategoryShelves"></div>
                <div class="text-center mt-20">
                    <button class="btn btn-primary" onclick="navigate('products')">مشاهده همه محصولات</button>
                </div>
            </div>
        </section>
        <section class="section" style="background:var(--primary-soft);">
            <div class="container">
                <div class="section-header">
                    <h2 data-edit-key="homeWhyTitle">${escapeHtml(s.homeWhyTitle || "چرا کود ارگانیک؟")}</h2>
                    <p data-edit-key="homeWhyDesc">${escapeHtml(s.homeWhyDesc || "")}</p>
                </div>
                <div class="benefits-grid stagger">
                    <div class="benefit-card"><div class="benefit-icon">🌍</div><h3 data-edit-key="homeBenefit1Title">${escapeHtml(s.homeBenefit1Title || "")}</h3><p data-edit-key="homeBenefit1Desc">${escapeHtml(s.homeBenefit1Desc || "")}</p></div>
                    <div class="benefit-card"><div class="benefit-icon">🌱</div><h3 data-edit-key="homeBenefit2Title">${escapeHtml(s.homeBenefit2Title || "")}</h3><p data-edit-key="homeBenefit2Desc">${escapeHtml(s.homeBenefit2Desc || "")}</p></div>
                    <div class="benefit-card"><div class="benefit-icon">📈</div><h3 data-edit-key="homeBenefit3Title">${escapeHtml(s.homeBenefit3Title || "")}</h3><p data-edit-key="homeBenefit3Desc">${escapeHtml(s.homeBenefit3Desc || "")}</p></div>
                    <div class="benefit-card"><div class="benefit-icon">🛡️</div><h3 data-edit-key="homeBenefit4Title">${escapeHtml(s.homeBenefit4Title || "")}</h3><p data-edit-key="homeBenefit4Desc">${escapeHtml(s.homeBenefit4Desc || "")}</p></div>
                </div>
            </div>
        </section>`;
        const shelves = document.getElementById("homeCategoryShelves");
        if (shelves) {
          let html = "";
          getAllCategories().forEach((cat) => {
            const list = productsInCategory(cat, true);
            if (list.length) html += buildCategoryShelf(cat, list);
          });
          shelves.innerHTML = html || '<p style="text-align:center;color:var(--text-muted);">محصولی ثبت نشده است</p>';
          setTimeout(playShelfHintAnimation, 600);
        }
      }

      function playShelfHintAnimation() {
        try {
          if (localStorage.getItem("shelfHintSeen") === "1") return;
          const track = document.querySelector(".cat-shelf-track");
          if (!track || track.scrollWidth <= track.clientWidth + 20) return;
          const isRtl = document.documentElement.getAttribute("dir") === "rtl";
          // برای RTL با direction:ltr روی track، اسکرول مثبت به راست می‌رود
          const max = Math.min(120, track.scrollWidth - track.clientWidth);
          track.classList.add("shelf-hint-active");
          track.scrollTo({ left: max, behavior: "smooth" });
          setTimeout(() => {
            track.scrollTo({ left: 0, behavior: "smooth" });
            setTimeout(() => {
              track.classList.remove("shelf-hint-active");
              localStorage.setItem("shelfHintSeen", "1");
            }, 700);
          }, 900);
        } catch (e) {}
      }

      function createProductCard(p) {
        const div = document.createElement("div");
        div.className = "product-card";
        div.innerHTML = `
            <div class="product-card-img">
                ${
                  (p.images && p.images[0]) || p.image
                    ? `<img src="${(p.images && p.images[0]) || p.image}" alt="${escapeHtml(p.name)}" style="width:100%;height:100%;object-fit:cover;" />`
                    : `<div class="placeholder-visual" style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:4rem;">🌿</div>`
                }
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
        const s = DB.settings;
        document.getElementById("app").innerHTML = `
        <section class="section" style="padding-top:calc(var(--header-h) + 40px);">
            <div class="container">
                <div class="section-header">
                    <h2 data-edit-key="productsPageTitle">${escapeHtml(s.productsPageTitle || "محصولات ما")}</h2>
                    <p data-edit-key="productsPageDesc">${escapeHtml(s.productsPageDesc || "")}</p>
                </div>
                <div class="products-toolbar">
                  <input type="search" id="productSearch" placeholder="جستجوی محصول..." oninput="filterProductShelves()" />
                </div>
                <div id="productsShelves"></div>
                <div class="empty-state hidden" id="noProducts">
                    <div style="font-size:3rem;">🔍</div>
                    <p>محصولی یافت نشد.</p>
                </div>
            </div>
        </section>`;
        filterProductShelves();
      }

      window.filterProductShelves = function () {
        const q = (document.getElementById("productSearch")?.value || "").toLowerCase().trim();
        const box = document.getElementById("productsShelves");
        const empty = document.getElementById("noProducts");
        if (!box) return;
        let html = "";
        let total = 0;
        getAllCategories().forEach((cat) => {
          let list = productsInCategory(cat, true);
          if (q) {
            list = list.filter(
              (p) =>
                (p.name || "").toLowerCase().includes(q) ||
                (p.shortDesc || "").toLowerCase().includes(q) ||
                (p.type || "").toLowerCase().includes(q) ||
                (p.category || "").toLowerCase().includes(q),
            );
          }
          if (list.length) {
            total += list.length;
            html += buildCategoryShelf(cat, list);
          }
        });
        box.innerHTML = html;
        if (empty) {
          if (total === 0) empty.classList.remove("hidden");
          else empty.classList.add("hidden");
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
                    <div class="product-media-col">
                        ${(() => {
                          const imgs = (p.images && p.images.length)
                            ? p.images
                            : (p.image ? [p.image] : []);
                          if (!imgs.length) {
                            return `<div class="product-detail-img"><div class="placeholder-visual" style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:6rem;">🌿</div></div>`;
                          }
                          return `
                          <div class="h-gallery" id="productHGallery">
                            <button type="button" class="h-gallery-nav h-gallery-prev" onclick="event.preventDefault();event.stopPropagation();scrollProductGallery(-1)" aria-label="قبلی">‹</button>
                            <div class="h-gallery-track" id="productGalleryTrack">
                              ${imgs.map((src, i) => `
                                <div class="h-gallery-slide">
                                  <img src="${src}" alt="${escapeHtml(p.name)} - ${i + 1}" loading="lazy" />
                                </div>`).join("")}
                            </div>
                            <button type="button" class="h-gallery-nav h-gallery-next" onclick="event.preventDefault();event.stopPropagation();scrollProductGallery(1)" aria-label="بعدی">›</button>
                          </div>
                          ${imgs.length > 1 ? `
                          <div class="h-gallery-dots" id="productGalleryDots">
                            ${imgs.map((_, i) => `<button type="button" class="h-gallery-dot ${i===0?"active":""}" data-i="${i}" onclick="goProductGallery(${i})"></button>`).join("")}
                          </div>` : ""}`;
                        })()}
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
                ${
                  p.video
                    ? `<div class="product-video-wrap"><video src="${p.video}" controls playsinline></video></div>`
                    : ""
                }
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
        bindProductGalleryScroll();
        initRevealAnimations();
        // SEO update
        document.title = `${p.name} | کود ارگانیک`;
      }

      function renderAbout() {
        const s = DB.settings;
        const aboutImg = s.aboutImage || "";
        document.getElementById("app").innerHTML = `
        <section class="section" style="padding-top:calc(var(--header-h) + 40px);">
            <div class="container">
                <div class="about-grid">
                    <div>
                        <h2>درباره <span data-edit-key="companyName">${escapeHtml(s.companyName)}</span></h2>
                        <p data-edit-key="aboutText">${escapeHtml(s.aboutText)}</p>
                        <div class="about-features">
                            <div class="about-feature"><span style="font-size:1.4rem;">✓</span><span data-edit-key="aboutFeature1">${escapeHtml(s.aboutFeature1 || "")}</span></div>
                            <div class="about-feature"><span style="font-size:1.4rem;">✓</span><span data-edit-key="aboutFeature2">${escapeHtml(s.aboutFeature2 || "")}</span></div>
                            <div class="about-feature"><span style="font-size:1.4rem;">✓</span><span data-edit-key="aboutFeature3">${escapeHtml(s.aboutFeature3 || "")}</span></div>
                            <div class="about-feature"><span style="font-size:1.4rem;">✓</span><span data-edit-key="aboutFeature4">${escapeHtml(s.aboutFeature4 || "")}</span></div>
                        </div>
                    </div>
                    <div class="about-image-box">
                        ${
                          aboutImg
                            ? `<img src="${aboutImg}" alt="درباره ما" style="width:100%;height:100%;object-fit:cover;border-radius:24px;" />`
                            : `<div class="placeholder-visual" style="border-radius:24px;height:360px;display:flex;align-items:center;justify-content:center;font-size:6rem;">🌾</div>`
                        }
                    </div>
                </div>
            </div>
        </section>`;
      }

      function renderBenefits() {
        const s = DB.settings;
        document.getElementById("app").innerHTML = `
        <section class="section" style="padding-top:calc(var(--header-h) + 40px);">
            <div class="container">
                <div class="section-header">
                    <h2 data-edit-key="benefitsPageTitle">${escapeHtml(s.benefitsPageTitle || "مزایای محصولات ما")}</h2>
                    <p data-edit-key="benefitsPageDesc">${escapeHtml(s.benefitsPageDesc || "")}</p>
                </div>
                <div class="benefits-grid">
                    <div class="benefit-card"><div class="benefit-icon">🌱</div><h3 data-edit-key="benefit1Title">${escapeHtml(s.benefit1Title || "")}</h3><p data-edit-key="benefit1Desc">${escapeHtml(s.benefit1Desc || "")}</p></div>
                    <div class="benefit-card"><div class="benefit-icon">💧</div><h3 data-edit-key="benefit2Title">${escapeHtml(s.benefit2Title || "")}</h3><p data-edit-key="benefit2Desc">${escapeHtml(s.benefit2Desc || "")}</p></div>
                    <div class="benefit-card"><div class="benefit-icon">🛡️</div><h3 data-edit-key="benefit3Title">${escapeHtml(s.benefit3Title || "")}</h3><p data-edit-key="benefit3Desc">${escapeHtml(s.benefit3Desc || "")}</p></div>
                    <div class="benefit-card"><div class="benefit-icon">📈</div><h3 data-edit-key="benefit4Title">${escapeHtml(s.benefit4Title || "")}</h3><p data-edit-key="benefit4Desc">${escapeHtml(s.benefit4Desc || "")}</p></div>
                    <div class="benefit-card"><div class="benefit-icon">🌍</div><h3 data-edit-key="benefit5Title">${escapeHtml(s.benefit5Title || "")}</h3><p data-edit-key="benefit5Desc">${escapeHtml(s.benefit5Desc || "")}</p></div>
                    <div class="benefit-card"><div class="benefit-icon">🔬</div><h3 data-edit-key="benefit6Title">${escapeHtml(s.benefit6Title || "")}</h3><p data-edit-key="benefit6Desc">${escapeHtml(s.benefit6Desc || "")}</p></div>
                </div>
            </div>
        </section>`;
      }


      function currentUserKey() {
        const u = DB.currentUser;
        if (!u) return null;
        const full = DB.users.find((x) => x.id === u.id) || u;
        return {
          userId: full.id,
          name: full.name || u.name || "",
          mobile: normalizeMobile(full.mobile || ""),
          email: (full.email || u.email || "").toLowerCase(),
        };
      }

      function myConsultations() {
        const k = currentUserKey();
        if (!k) return [];
        return (DB.consultations || []).filter(
          (c) =>
            c.userId === k.userId ||
            (k.mobile && normalizeMobile(c.mobile) === k.mobile) ||
            (k.email && (c.email || "").toLowerCase() === k.email),
        );
      }

      function myTickets() {
        const k = currentUserKey();
        if (!k) return [];
        return (DB.tickets || []).filter(
          (t) =>
            t.userId === k.userId ||
            (k.mobile && normalizeMobile(t.contact || "") === k.mobile) ||
            (k.email && (t.contact || "").toLowerCase() === k.email) ||
            (k.email && (t.email || "").toLowerCase() === k.email),
        );
      }

      function renderUserInbox(kind) {
        // kind: 'consult' | 'support'
        const isConsult = kind === "consult";
        const items = isConsult ? myConsultations() : myTickets();
        const title = isConsult
          ? DB.settings.consultTitle || "مشاوره"
          : DB.settings.supportTitle || "پشتیبانی";
        const desc = isConsult
          ? DB.settings.consultDesc || ""
          : DB.settings.supportDesc || "";

        if (!DB.currentUser) {
          document.getElementById("app").innerHTML = `
          <section class="section" style="padding-top:calc(var(--header-h) + 40px);">
            <div class="container" style="max-width:520px;text-align:center;">
              <div class="form-card">
                <h2 style="margin-bottom:10px;">${escapeHtml(title)}</h2>
                <p style="color:var(--text-muted);margin-bottom:18px;">برای مشاهده گفتگوها و ارسال تیکت جدید وارد حساب شوید.</p>
                <button class="btn btn-primary" onclick="openLoginModal()">ورود / ثبت‌نام</button>
                <button class="btn btn-outline" style="margin-right:8px;" onclick="navigate('home')">بازگشت</button>
              </div>
            </div>
          </section>`;
          return;
        }

        const k = currentUserKey();
        document.getElementById("app").innerHTML = `
        <section class="section" style="padding-top:calc(var(--header-h) + 40px);">
          <div class="container" style="max-width:720px;">
            <div class="section-header">
              <h2>${escapeHtml(title)}</h2>
              <p>${escapeHtml(desc)}</p>
            </div>
            <div class="user-inbox-toolbar">
              <button class="btn btn-primary" onclick="showNewTicketForm('${kind}')">+ تیکت / پیام جدید</button>
              <span class="admin-search-count">${items.length} گفتگو</span>
            </div>
            <div id="userNewTicketBox" class="hidden"></div>
            <div class="admin-card-list" id="userInboxList">
              ${
                items.length
                  ? items
                      .map((item) => {
                        if (isConsult) {
                          return `
                          <article class="admin-ticket-card" style="cursor:pointer;" onclick="openUserChat('consult', ${item.id})">
                            <div class="atc-top">
                              <div>
                                <h3 class="atc-title">مشاوره — ${escapeHtml(item.productName || "عمومی")}</h3>
                                <div class="atc-meta">${escapeHtml(item.createdAt || "")}</div>
                              </div>
                              <span class="badge ${item.status === "جدید" ? "badge-red" : item.status === "پاسخ داده شد" ? "badge-green" : "badge-yellow"}">${escapeHtml(item.status)}</span>
                            </div>
                            <p class="atc-preview">${escapeHtml((item.desc || "").slice(0, 110))}</p>
                          </article>`;
                        }
                        return `
                          <article class="admin-ticket-card" style="cursor:pointer;" onclick="openUserChat('ticket', ${item.id})">
                            <div class="atc-top">
                              <div>
                                <h3 class="atc-title">${escapeHtml(item.subject || "بدون موضوع")}</h3>
                                <div class="atc-meta">${escapeHtml(item.createdAt || "")}</div>
                              </div>
                              <span class="badge ${item.status === "باز" ? "badge-red" : item.status === "بسته" ? "badge-green" : "badge-yellow"}">${escapeHtml(item.status)}</span>
                            </div>
                            <p class="atc-preview">${escapeHtml((item.message || "").slice(0, 110))}</p>
                          </article>`;
                      })
                      .join("")
                  : `<div class="admin-empty">هنوز گفتگویی ندارید. با دکمه بالا پیام جدید بفرستید.</div>`
              }
            </div>
          </div>
        </section>
        <div class="modal-overlay" id="userChatModal">
          <div class="modal" style="max-width:560px;">
            <div class="modal-header">
              <h3 id="userChatTitle">گفتگو</h3>
              <button class="modal-close" onclick="closeModal('userChatModal')">×</button>
            </div>
            <div class="modal-body">
              <div id="userChatMeta" class="admin-lead"></div>
              <div class="chat-thread" id="userChatThread"></div>
              <div class="form-group" style="margin-top:14px;">
                <label>پیام شما</label>
                <textarea id="userChatReply" placeholder="پیام جدید..."></textarea>
              </div>
            </div>
            <div class="modal-footer">
              <button class="btn btn-outline" onclick="closeModal('userChatModal')">بستن</button>
              <button class="btn btn-primary" onclick="sendUserChatReply()">ارسال</button>
            </div>
          </div>
        </div>`;
      }

      function renderConsult() {
        renderUserInbox("consult");
      }
      function renderSupport() {
        renderUserInbox("support");
      }

      window.showNewTicketForm = function (kind) {
        const box = document.getElementById("userNewTicketBox");
        if (!box) return;
        const k = currentUserKey() || {};
        const products = DB.products.filter((p) => p.status === "active");
        if (kind === "consult") {
          box.classList.remove("hidden");
          box.innerHTML = `
            <div class="form-card" style="margin-bottom:20px;">
              <h3 style="margin-bottom:12px;">درخواست مشاوره جدید</h3>
              <div class="form-group"><label>نام</label><input id="cName" value="${escapeHtml(k.name || "")}" /></div>
              <div class="form-group"><label>موبایل</label><input id="cMobile" value="${escapeHtml(k.mobile || "")}" /></div>
              <div class="form-group"><label>ایمیل</label><input id="cEmail" value="${escapeHtml(k.email || "")}" /></div>
              <div class="form-group"><label>محصول</label>
                <select id="cProduct"><option value="">عمومی</option>${products.map((p) => `<option value="${p.id}">${escapeHtml(p.name)}</option>`).join("")}</select>
              </div>
              <div class="form-group"><label>نوع کشت</label>
                <select id="cCrop"><option>زراعت</option><option>باغ</option><option>گلخانه</option><option>فضای سبز</option><option>سایر</option></select>
              </div>
              <div class="form-group"><label>زمان تماس</label>
                <select id="cTime"><option>هر زمان</option><option>صبح (۸-۱۲)</option><option>ظهر (۱۲-۱۶)</option><option>عصر (۱۶-۲۰)</option></select>
              </div>
              <div class="form-group"><label>توضیحات</label><textarea id="cDesc"></textarea></div>
              <div style="display:flex;gap:8px;flex-wrap:wrap;">
                <button class="btn btn-primary" onclick="submitConsult()">ثبت</button>
                <button class="btn btn-outline" onclick="document.getElementById('userNewTicketBox').classList.add('hidden')">انصراف</button>
              </div>
            </div>`;
        } else {
          box.classList.remove("hidden");
          box.innerHTML = `
            <div class="form-card" style="margin-bottom:20px;">
              <h3 style="margin-bottom:12px;">تیکت پشتیبانی جدید</h3>
              <div class="form-group"><label>موضوع *</label><input id="tSubject" /></div>
              <div class="form-group"><label>نام</label><input id="tName" value="${escapeHtml(k.name || "")}" /></div>
              <div class="form-group"><label>تماس (موبایل یا ایمیل)</label><input id="tContact" value="${escapeHtml(k.mobile || k.email || "")}" /></div>
              <div class="form-group"><label>اولویت</label>
                <select id="tPriority"><option>عادی</option><option>مهم</option><option>فوری</option></select>
              </div>
              <div class="form-group"><label>پیام *</label><textarea id="tMessage"></textarea></div>
              <div style="display:flex;gap:8px;flex-wrap:wrap;">
                <button class="btn btn-primary" onclick="submitTicket()">ارسال</button>
                <button class="btn btn-outline" onclick="document.getElementById('userNewTicketBox').classList.add('hidden')">انصراف</button>
              </div>
            </div>`;
        }
        box.scrollIntoView({ behavior: "smooth", block: "start" });
      };

      window.submitConsult = function () {
        const name = document.getElementById("cName").value.trim();
        const mobile = document.getElementById("cMobile").value.trim();
        if (!name || !mobile) {
          showToast("نام و موبایل الزامی است", "error");
          return;
        }
        const productId = document.getElementById("cProduct")?.value;
        const product = DB.products.find((p) => p.id == productId);
        const k = currentUserKey();
        DB.consultations.unshift({
          id: Date.now(),
          userId: k ? k.userId : null,
          name,
          mobile,
          email: document.getElementById("cEmail")?.value.trim() || (k && k.email) || "",
          productId: productId || null,
          productName: product ? product.name : "عمومی",
          crop: document.getElementById("cCrop")?.value || "",
          time: document.getElementById("cTime")?.value || "",
          desc: document.getElementById("cDesc")?.value.trim() || "",
          status: "جدید",
          reply: "",
          replies: [],
          createdAt: new Date().toLocaleString("fa-IR"),
        });
        if (DB.stats) DB.stats.consultations = (DB.stats.consultations || 0) + 1;
        saveDB(DB);
        logActivity("ثبت درخواست مشاوره", name);
        showSuccessModal("پیام شما ارسال شد", "درخواست مشاوره ثبت شد. می‌توانید از لیست گفتگوها پیگیری کنید.");
        setTimeout(() => renderConsult(), 400);
      };

      window.submitTicket = function () {
        const subject = document.getElementById("tSubject")?.value.trim();
        const name = document.getElementById("tName")?.value.trim();
        const contact = document.getElementById("tContact")?.value.trim();
        const message = document.getElementById("tMessage")?.value.trim();
        if (!subject || !name || !contact || !message) {
          showToast("همه فیلدهای ضروری را پر کنید", "error");
          return;
        }
        const k = currentUserKey();
        DB.tickets.unshift({
          id: Date.now(),
          userId: k ? k.userId : null,
          subject,
          name,
          contact,
          email: k ? k.email : "",
          priority: document.getElementById("tPriority")?.value || "عادی",
          message,
          status: "باز",
          replies: [],
          createdAt: new Date().toLocaleString("fa-IR"),
        });
        saveDB(DB);
        logActivity("ثبت تیکت پشتیبانی", subject);
        showSuccessModal("پیام شما ارسال شد", "تیکت ثبت شد. از لیست گفتگوها می‌توانید ادامه دهید.");
        setTimeout(() => renderSupport(), 400);
      };

      window.openUserChat = function (kind, id) {
        window._userChat = { kind, id };
        let title = "گفتگو";
        let meta = "";
        let thread = "";
        if (kind === "consult") {
          const c = DB.consultations.find((x) => x.id === id);
          if (!c) return;
          title = "مشاوره — " + (c.productName || "");
          meta = `وضعیت: ${c.status} | ${c.createdAt || ""}`;
          thread += `<div class="chat-bubble user"><strong>شما</strong><p>${escapeHtml(c.desc || "(بدون متن)")}</p><small>${c.createdAt || ""}</small></div>`;
          (c.replies || []).forEach((r) => {
            const isAdmin = r.by && r.by !== c.name;
            thread += `<div class="chat-bubble ${isAdmin ? "admin" : "user"}"><strong>${escapeHtml(r.by || "")}</strong><p>${escapeHtml(r.text)}</p><small>${r.time || ""}</small></div>`;
          });
          if (c.reply) thread += `<div class="chat-bubble admin"><strong>پشتیبان</strong><p>${escapeHtml(c.reply)}</p></div>`;
        } else {
          const t = DB.tickets.find((x) => x.id === id);
          if (!t) return;
          title = t.subject || "تیکت";
          meta = `وضعیت: ${t.status} | ${t.createdAt || ""}`;
          thread += `<div class="chat-bubble user"><strong>شما</strong><p>${escapeHtml(t.message || "")}</p><small>${t.createdAt || ""}</small></div>`;
          (t.replies || []).forEach((r) => {
            const cls = r.from === "user" ? "user" : "admin";
            thread += `<div class="chat-bubble ${cls}"><strong>${escapeHtml(r.by || "")}</strong><p>${escapeHtml(r.text)}</p><small>${r.time || ""}</small></div>`;
          });
        }
        document.getElementById("userChatTitle").textContent = title;
        document.getElementById("userChatMeta").textContent = meta;
        document.getElementById("userChatThread").innerHTML = thread;
        document.getElementById("userChatReply").value = "";
        openModalById("userChatModal");
      };

      window.sendUserChatReply = function () {
        const box = window._userChat;
        if (!box) return;
        const text = document.getElementById("userChatReply")?.value.trim();
        if (!text) {
          showToast("متن پیام را بنویسید", "error");
          return;
        }
        const k = currentUserKey();
        const reply = {
          text,
          time: new Date().toLocaleString("fa-IR"),
          by: k ? k.name : "کاربر",
          from: "user",
        };
        if (box.kind === "consult") {
          const c = DB.consultations.find((x) => x.id === box.id);
          if (!c) return;
          if (!c.replies) c.replies = [];
          c.replies.push(reply);
          if (c.status === "بسته") c.status = "در حال بررسی";
        } else {
          const t = DB.tickets.find((x) => x.id === box.id);
          if (!t) return;
          if (!t.replies) t.replies = [];
          t.replies.push(reply);
          if (t.status === "بسته") t.status = "باز";
        }
        saveDB(DB);
        showToast("پیام ارسال شد");
        openUserChat(box.kind, box.id);
      };

      function renderContact() {
        const s = DB.settings;
        document.getElementById("app").innerHTML = `
        <section class="section" style="padding-top:calc(var(--header-h) + 40px);">
            <div class="container">
                <div class="section-header">
                    <h2 data-edit-key="contactTitle">${escapeHtml(s.contactTitle || "تماس با ما")}</h2>
                    <p data-edit-key="contactDesc">${escapeHtml(s.contactDesc || "راه‌های ارتباطی با " + s.companyName)}</p>
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



      // ==================== SCROLL REVEAL ANIMATIONS ====================
      function initRevealAnimations() {
        try {
          const nodes = document.querySelectorAll(
            ".product-card, .stat-card, .benefit-card, .section-header, .form-card, .detail-section, .about-feature, .hero-content, .hero-visual",
          );
          nodes.forEach((el, i) => {
            if (el.classList.contains("reveal")) return;
            el.classList.add("reveal");
            el.classList.add("reveal-delay-" + ((i % 5) + 1));
          });
          if (!("IntersectionObserver" in window)) {
            nodes.forEach((el) => el.classList.add("revealed"));
            return;
          }
          const io = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  entry.target.classList.add("revealed");
                  io.unobserve(entry.target);
                }
              });
            },
            { threshold: 0.12, rootMargin: "0px 0px -24px 0px" },
          );
          document.querySelectorAll(".reveal:not(.revealed)").forEach((el) => io.observe(el));
        } catch (e) {
          console.warn("reveal", e);
        }
      }

      // ==================== SUPPORT FAB ====================


      // ==================== SUCCESS MODAL ====================
      function showSuccessModal(title, msg) {
        const t = document.getElementById("successTitle");
        const m = document.getElementById("successMsg");
        if (t) t.textContent = title || "پیام شما ارسال شد";
        if (m) m.textContent = msg || "کارشناسان ما به‌زودی با شما تماس می‌گیرند.";
        const el = document.getElementById("successModal");
        if (el) el.classList.add("open");
        const check = document.getElementById("successCheck");
        if (check) {
          check.classList.remove("pop");
          void check.offsetWidth;
          check.classList.add("pop");
        }
      }
      window.closeSuccessAndHome = function () {
        closeModal("successModal");
        navigate("home");
      };

      // ==================== PAGES EDITOR (quick admin) ====================
      window.openPagesEditor = function () {
        // فقط از داخل پنل مدیریت فراخوانی می‌شود
        if (!isStaff() || (!hasPermission("pages_edit") && !isOwner())) {
          showToast("دسترسی ویرایش صفحات ندارید", "error");
          return;
        }
        const s = DB.settings;
        const products = DB.products.filter((p) => p.status === "active");
        const field = (id, label, val, multi = false) =>
          multi
            ? `<div class="form-group"><label>${label}</label><textarea id="pe_${id}">${escapeHtml(val || "")}</textarea></div>`
            : `<div class="form-group"><label>${label}</label><input id="pe_${id}" value="${escapeHtml(val || "")}"></div>`;

        document.getElementById("pagesEditorBody").innerHTML = `
          <div class="support-tabs" style="margin-bottom:16px;" id="peTabs">
            <button type="button" class="filter-btn active" data-petab="home" onclick="switchPeTab('home')">صفحه اصلی</button>
            <button type="button" class="filter-btn" data-petab="about" onclick="switchPeTab('about')">درباره ما</button>
            <button type="button" class="filter-btn" data-petab="products" onclick="switchPeTab('products')">محصولات</button>
            <button type="button" class="filter-btn" data-petab="benefits" onclick="switchPeTab('benefits')">مزایا</button>
            <button type="button" class="filter-btn" data-petab="support" onclick="switchPeTab('support')">مشاوره و پشتیبانی</button>
            <button type="button" class="filter-btn" data-petab="contact" onclick="switchPeTab('contact')">تماس و فوتر</button>
          </div>

          <div class="pe-panel" data-pe="home">
            <h4 style="margin-bottom:12px;color:var(--primary);">هیرو و محصول ویژه</h4>
            ${field("companyName", "نام شرکت / سایت", s.companyName)}
            ${field("heroTitle", "عنوان هیرو", s.heroTitle)}
            ${field("heroDesc", "توضیح هیرو", s.heroDesc, true)}
            <div class="form-row">
              ${field("heroBtn1", "متن دکمه ۱", s.heroBtn1)}
              ${field("heroBtn2", "متن دکمه ۲", s.heroBtn2)}
            </div>
            ${field("heroCardTitle", "عنوان کارت محصول ویژه", s.heroCardTitle)}
            ${field("heroCardDesc", "توضیح کارت محصول ویژه", s.heroCardDesc, true)}
            <div class="form-group"><label>محصول مرتبط با کارت ویژه</label>
              <select id="pe_heroFeaturedProductId">
                ${products.map((p) => `<option value="${p.id}" ${s.heroFeaturedProductId == p.id ? "selected" : ""}>${escapeHtml(p.name)}</option>`).join("")}
              </select>
            </div>
            <div class="form-group"><label>عکس اختصاصی کارت ویژه (صفحه اصلی)</label>
              <input type="file" id="pe_heroFeaturedImage" accept="image/*" />
              ${s.heroFeaturedImage ? `<img src="${s.heroFeaturedImage}" style="max-width:180px;margin-top:8px;border-radius:12px;" />` : "<p style='font-size:0.85rem;color:var(--text-muted)'>اگر خالی باشد از عکس محصول استفاده می‌شود</p>"}
            </div>
            <h4 style="margin:16px 0 12px;color:var(--primary);">بخش محصولات منتخب و چرا ما</h4>
            ${field("homeProductsTitle", "عنوان محصولات منتخب", s.homeProductsTitle)}
            ${field("homeProductsDesc", "توضیح محصولات منتخب", s.homeProductsDesc, true)}
            ${field("homeWhyTitle", "عنوان «چرا ما»", s.homeWhyTitle)}
            ${field("homeWhyDesc", "توضیح «چرا ما»", s.homeWhyDesc, true)}
            ${field("homeBenefit1Title", "مزیت خانه ۱ — عنوان", s.homeBenefit1Title)}
            ${field("homeBenefit1Desc", "مزیت خانه ۱ — متن", s.homeBenefit1Desc, true)}
            ${field("homeBenefit2Title", "مزیت خانه ۲ — عنوان", s.homeBenefit2Title)}
            ${field("homeBenefit2Desc", "مزیت خانه ۲ — متن", s.homeBenefit2Desc, true)}
            ${field("homeBenefit3Title", "مزیت خانه ۳ — عنوان", s.homeBenefit3Title)}
            ${field("homeBenefit3Desc", "مزیت خانه ۳ — متن", s.homeBenefit3Desc, true)}
            ${field("homeBenefit4Title", "مزیت خانه ۴ — عنوان", s.homeBenefit4Title)}
            ${field("homeBenefit4Desc", "مزیت خانه ۴ — متن", s.homeBenefit4Desc, true)}
          </div>

          <div class="pe-panel hidden" data-pe="about">
            <h4 style="margin-bottom:12px;color:var(--primary);">درباره ما</h4>
            ${field("aboutText", "متن کامل درباره ما", s.aboutText, true)}
            <div class="form-group"><label>تصویر درباره ما</label>
              <input type="file" id="pe_aboutImage" accept="image/*" />
              ${s.aboutImage ? `<img src="${s.aboutImage}" style="max-width:160px;margin-top:8px;border-radius:10px;" />` : "<p style='font-size:0.85rem;color:var(--text-muted)'>هنوز تصویری نیست</p>"}
            </div>
            ${field("aboutFeature1", "نکته ۱", s.aboutFeature1)}
            ${field("aboutFeature2", "نکته ۲", s.aboutFeature2)}
            ${field("aboutFeature3", "نکته ۳", s.aboutFeature3)}
            ${field("aboutFeature4", "نکته ۴", s.aboutFeature4)}
          </div>

          <div class="pe-panel hidden" data-pe="products">
            <h4 style="margin-bottom:12px;color:var(--primary);">صفحه محصولات</h4>
            ${field("productsPageTitle", "عنوان صفحه", s.productsPageTitle)}
            ${field("productsPageDesc", "توضیح صفحه", s.productsPageDesc, true)}
            <p style="font-size:0.85rem;color:var(--text-muted);">متن هر محصول را از «ویرایش مستقیم» روی کارت/جزئیات یا از پنل محصولات تغییر دهید.</p>
          </div>

          <div class="pe-panel hidden" data-pe="benefits">
            <h4 style="margin-bottom:12px;color:var(--primary);">صفحه مزایای محصولات</h4>
            ${field("benefitsPageTitle", "عنوان صفحه", s.benefitsPageTitle)}
            ${field("benefitsPageDesc", "توضیح صفحه", s.benefitsPageDesc, true)}
            ${field("benefit1Title", "مزیت ۱ عنوان", s.benefit1Title)}
            ${field("benefit1Desc", "مزیت ۱ متن", s.benefit1Desc, true)}
            ${field("benefit2Title", "مزیت ۲ عنوان", s.benefit2Title)}
            ${field("benefit2Desc", "مزیت ۲ متن", s.benefit2Desc, true)}
            ${field("benefit3Title", "مزیت ۳ عنوان", s.benefit3Title)}
            ${field("benefit3Desc", "مزیت ۳ متن", s.benefit3Desc, true)}
            ${field("benefit4Title", "مزیت ۴ عنوان", s.benefit4Title)}
            ${field("benefit4Desc", "مزیت ۴ متن", s.benefit4Desc, true)}
            ${field("benefit5Title", "مزیت ۵ عنوان", s.benefit5Title)}
            ${field("benefit5Desc", "مزیت ۵ متن", s.benefit5Desc, true)}
            ${field("benefit6Title", "مزیت ۶ عنوان", s.benefit6Title)}
            ${field("benefit6Desc", "مزیت ۶ متن", s.benefit6Desc, true)}
          </div>

          <div class="pe-panel hidden" data-pe="support">
            <h4 style="margin-bottom:12px;color:var(--primary);">مشاوره و پشتیبانی</h4>
            ${field("consultTitle", "عنوان صفحه مشاوره", s.consultTitle)}
            ${field("consultDesc", "توضیح مشاوره", s.consultDesc, true)}
            ${field("supportTitle", "عنوان صفحه پشتیبانی", s.supportTitle)}
            ${field("supportDesc", "توضیح پشتیبانی", s.supportDesc, true)}
          </div>

          <div class="pe-panel hidden" data-pe="contact">
            <h4 style="margin-bottom:12px;color:var(--primary);">تماس و فوتر</h4>
            ${field("contactTitle", "عنوان تماس با ما", s.contactTitle)}
            ${field("contactDesc", "توضیح تماس", s.contactDesc, true)}
            ${field("phone", "تلفن", s.phone)}
            ${field("email", "ایمیل", s.email)}
            ${field("address", "آدرس", s.address)}
            ${field("hours", "ساعات کاری", s.hours, true)}
            ${field("footerDesc", "توضیح فوتر", s.footerDesc, true)}
          </div>
        `;
        openModalById("pagesEditorModal");
      };

      window.switchPeTab = function (tab) {
        document.querySelectorAll("#peTabs .filter-btn").forEach((b) => {
          b.classList.toggle("active", b.dataset.petab === tab);
        });
        document.querySelectorAll(".pe-panel").forEach((p) => {
          p.classList.toggle("hidden", p.dataset.pe !== tab);
        });
      };

      window.savePagesEditor = async function () {
        const keys = [
          "companyName","heroTitle","heroDesc","heroBtn1","heroBtn2","heroCardTitle","heroCardDesc",
          "homeProductsTitle","homeProductsDesc","homeWhyTitle","homeWhyDesc",
          "homeBenefit1Title","homeBenefit1Desc","homeBenefit2Title","homeBenefit2Desc",
          "homeBenefit3Title","homeBenefit3Desc","homeBenefit4Title","homeBenefit4Desc",
          "aboutText","aboutFeature1","aboutFeature2","aboutFeature3","aboutFeature4",
          "productsPageTitle","productsPageDesc",
          "benefitsPageTitle","benefitsPageDesc",
          "benefit1Title","benefit1Desc","benefit2Title","benefit2Desc",
          "benefit3Title","benefit3Desc","benefit4Title","benefit4Desc",
          "benefit5Title","benefit5Desc","benefit6Title","benefit6Desc",
          "consultTitle","consultDesc","supportTitle","supportDesc",
          "contactTitle","contactDesc","phone","email","address","hours","footerDesc",
        ];
        keys.forEach((k) => {
          const el = document.getElementById("pe_" + k);
          if (el) DB.settings[k] = el.value.trim();
        });
        const feat = document.getElementById("pe_heroFeaturedProductId");
        if (feat) DB.settings.heroFeaturedProductId = parseInt(feat.value, 10) || null;
        const featImgInput = document.getElementById("pe_heroFeaturedImage");
        if (featImgInput && featImgInput.files && featImgInput.files[0]) {
          const f = featImgInput.files[0];
          if (f.size > 2.5 * 1024 * 1024) {
            showToast("حجم عکس کارت ویژه زیاد است", "error");
          } else {
            DB.settings.heroFeaturedImage = await readFileAsDataURL(f);
          }
        }
        const fileInput = document.getElementById("pe_aboutImage");
        if (fileInput && fileInput.files && fileInput.files[0]) {
          const f = fileInput.files[0];
          if (f.size > 2.5 * 1024 * 1024) {
            showToast("حجم تصویر درباره ما زیاد است", "error");
          } else {
            DB.settings.aboutImage = await readFileAsDataURL(f);
          }
        }
        saveDB(DB);
        updateSiteTexts();
        closeModal("pagesEditorModal");
        showToast("تمام محتوای صفحات ذخیره شد");
        logActivity("ویرایش کامل صفحات");
        render();
      };

      // ==================== PRODUCT HORIZONTAL GALLERY ====================
      function getGalleryIndex() {
        const track = document.getElementById("productGalleryTrack");
        if (!track) return 0;
        const slides = track.querySelectorAll(".h-gallery-slide");
        if (!slides.length) return 0;
        const w = slides[0].getBoundingClientRect().width || track.clientWidth;
        if (!w) return 0;
        return Math.round(track.scrollLeft / w);
      }

      function setGalleryDots(index) {
        document.querySelectorAll("#productGalleryDots .h-gallery-dot").forEach((d, i) => {
          d.classList.toggle("active", i === index);
        });
      }

      window.scrollProductGallery = function (dir) {
        const track = document.getElementById("productGalleryTrack");
        if (!track) return;
        const slides = track.querySelectorAll(".h-gallery-slide");
        if (!slides.length) return;
        const w = slides[0].getBoundingClientRect().width || track.clientWidth;
        const max = slides.length - 1;
        let idx = getGalleryIndex();
        idx = Math.max(0, Math.min(max, idx + dir));
        track.scrollTo({ left: idx * w, behavior: "smooth" });
        setGalleryDots(idx);
      };

      window.goProductGallery = function (index) {
        const track = document.getElementById("productGalleryTrack");
        if (!track) return;
        const slides = track.querySelectorAll(".h-gallery-slide");
        if (!slides[index]) return;
        const w = slides[0].getBoundingClientRect().width || track.clientWidth;
        track.scrollTo({ left: index * w, behavior: "smooth" });
        setGalleryDots(index);
      };

      function bindProductGalleryScroll() {
        const track = document.getElementById("productGalleryTrack");
        if (!track) return;
        let ticking = false;
        track.addEventListener(
          "scroll",
          () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
              setGalleryDots(getGalleryIndex());
              ticking = false;
            });
          },
          { passive: true },
        );
      }


      // ==================== QUICK SOCIAL LINKS (owner FAB stack) ====================
      function renderQuickLinksFabs() {
        const box = document.getElementById("quickLinksFabs");
        const addBtn = document.getElementById("supportAddFab");
        if (!box) return;
        const links = DB.quickLinks || [];
        box.innerHTML = links
          .map(
            (l) => `
          <a class="support-fab quick-link-fab" href="${escapeHtml(l.url)}" target="_blank" rel="noopener noreferrer" title="${escapeHtml(l.name)}" style="order:0;">
            <img src="${l.logo}" alt="${escapeHtml(l.name)}" />
          </a>`,
          )
          .join("");
        if (addBtn) {
          addBtn.style.display = isOwner() ? "flex" : "none";
        }
      }

      window.openQuickLinkModal = function () {
        if (!isOwner()) {
          showToast("فقط مالک می‌تواند لینک اضافه کند", "error");
          return;
        }
        window._editingQuickLinkId = null;
        document.getElementById("quickLinkModalTitle").textContent = "افزودن لینک سریع";
        document.getElementById("qlName").value = "";
        document.getElementById("qlUrl").value = "";
        document.getElementById("qlLogo").value = "";
        window._qlLogoData = "";
        document.getElementById("qlLogoPreview").innerHTML = "";
        const list = document.getElementById("qlListManage");
        const links = DB.quickLinks || [];
        list.innerHTML =
          links.length === 0
            ? '<p style="font-size:0.85rem;color:var(--text-muted);">هنوز لینکی ثبت نشده.</p>'
            : `<p style="font-weight:600;margin-bottom:8px;">لینک‌های فعلی</p>` +
              links
                .map(
                  (l) => `
              <div style="display:flex;align-items:center;gap:10px;padding:8px;border:1px solid var(--border);border-radius:10px;margin-bottom:8px;">
                <img src="${l.logo}" alt="" style="width:36px;height:36px;border-radius:8px;object-fit:cover;" />
                <div style="flex:1;min-width:0;">
                  <strong>${escapeHtml(l.name)}</strong><br>
                  <small style="color:var(--text-muted);word-break:break-all;">${escapeHtml(l.url)}</small>
                </div>
                <button type="button" class="btn btn-sm" style="background:#c62828;color:#fff;" onclick="deleteQuickLink(${l.id})">حذف</button>
              </div>`,
                )
                .join("");
        const logoInput = document.getElementById("qlLogo");
        logoInput.onchange = async () => {
          const f = logoInput.files[0];
          if (!f) return;
          if (f.size > 1.5 * 1024 * 1024) {
            showToast("حجم لوگو حداکثر ۱.۵ مگابایت", "error");
            logoInput.value = "";
            return;
          }
          window._qlLogoData = await readFileAsDataURL(f);
          document.getElementById("qlLogoPreview").innerHTML =
            `<img src="${window._qlLogoData}" alt="پیش‌نمایش" style="width:56px;height:56px;border-radius:12px;object-fit:cover;border:1px solid var(--border);" />`;
        };
        openModalById("quickLinkModal");
      };

      window.saveQuickLink = async function () {
        if (!isOwner()) return;
        const name = document.getElementById("qlName").value.trim();
        const url = document.getElementById("qlUrl").value.trim();
        if (!name || !url) {
          showToast("نام و لینک الزامی است", "error");
          return;
        }
        if (!window._qlLogoData) {
          showToast("آپلود لوگو الزامی است", "error");
          return;
        }
        if (!DB.quickLinks) DB.quickLinks = [];
        DB.quickLinks.push({
          id: Date.now(),
          name,
          url,
          logo: window._qlLogoData,
        });
        saveDB(DB);
        logActivity("افزودن لینک سریع", name);
        closeModal("quickLinkModal");
        renderQuickLinksFabs();
        showToast("لینک با لوگو ذخیره شد");
      };

      window.deleteQuickLink = function (id) {
        if (!isOwner()) return;
        if (!confirm("این لینک حذف شود؟")) return;
        DB.quickLinks = (DB.quickLinks || []).filter((l) => l.id !== id);
        saveDB(DB);
        logActivity("حذف لینک سریع", String(id));
        renderQuickLinksFabs();
        openQuickLinkModal();
        showToast("حذف شد");
      };


      function isTicketAnswered(t) {
        if (!t) return false;
        if (t.status === "بسته" || t.status === "پاسخ داده شد") return true;
        const replies = t.replies || [];
        return replies.some((r) => r.from !== "user" && r.by);
      }

      function fabTicketFormHtml(k) {
        k = k || {};
        return `
          <div class="form-group"><label>موضوع *</label><input type="text" id="sfSubject" /></div>
          <div class="form-row">
            <div class="form-group"><label>نام *</label><input type="text" id="sfName" value="${escapeHtml(k.name || "")}" /></div>
            <div class="form-group"><label>شماره تماس یا ایمیل *</label><input type="text" id="sfContact" value="${escapeHtml(k.mobile || k.email || "")}" /></div>
          </div>
          <div class="form-group"><label>اولویت</label>
            <select id="sfPriority"><option value="عادی">عادی</option><option value="مهم">مهم</option><option value="فوری">فوری</option></select>
          </div>
          <div class="form-group"><label>متن پیام *</label><textarea id="sfMessage"></textarea></div>`;
      }

      function openSupportModal() {
        const modal = document.getElementById("supportModal");
        if (!modal) return;
        const header = modal.querySelector(".modal-header h3");
        const body = modal.querySelector(".modal-body");
        const footer = modal.querySelector(".modal-footer");
        if (!body || !footer) return;

        // مهمان: فقط فرم ساده (+ پیشنهاد ورود)
        if (!DB.currentUser) {
          if (header) header.textContent = "پیام به پشتیبانی";
          body.innerHTML = fabTicketFormHtml({}) +
            '<p class="admin-lead" style="margin-top:10px;">برای پیگیری تیکت‌ها پیشنهاد می‌شود وارد حساب شوید.</p>' +
            '<button type="button" class="btn btn-sm btn-outline" id="fabGuestLoginBtn">ورود به حساب</button>';
          footer.innerHTML = `
            <button class="btn btn-outline" onclick="closeModal('supportModal')">انصراف</button>
            <button class="btn btn-primary" onclick="submitSupportFab()">ارسال</button>`;
          openModalById("supportModal");
          const gbtn = document.getElementById("fabGuestLoginBtn");
          if (gbtn) {
            gbtn.onclick = function () {
              closeModal("supportModal");
              openLoginModal();
            };
          }
          return;
        }

        const mine = myTickets();
        // اولین بار: هنوز تیکتی نفرستاده → فقط فرم
        if (!mine.length) {
          if (header) header.textContent = "پیام به پشتیبانی";
          body.innerHTML = fabTicketFormHtml(currentUserKey() || {});
          footer.innerHTML = `
            <button class="btn btn-outline" onclick="closeModal('supportModal')">انصراف</button>
            <button class="btn btn-primary" onclick="submitSupportFab()">ارسال اولین تیکت</button>`;
          openModalById("supportModal");
          return;
        }

        // بار دوم به بعد: لیست پاسخ‌داده‌ / نداده‌ + تیکت جدید
        const unanswered = mine.filter((t) => !isTicketAnswered(t));
        const answered = mine.filter((t) => isTicketAnswered(t));
        if (header) header.textContent = "صندوق پشتیبانی شما";
        body.innerHTML = `
          <div class="fab-inbox">
            <button type="button" class="btn btn-primary" style="width:100%;margin-bottom:16px;" onclick="showFabNewTicketForm()">+ ثبت تیکت جدید</button>
            <div id="fabNewTicketSlot" class="hidden"></div>
            <h4 class="fab-inbox-title">⏳ در انتظار پاسخ (${unanswered.length})</h4>
            <div class="admin-card-list" style="margin-bottom:18px;">
              ${
                unanswered.length
                  ? unanswered
                      .map(
                        (t) => `
                <article class="admin-ticket-card" style="cursor:pointer;" onclick="closeModal('supportModal');navigate('support');setTimeout(function(){openUserChat('ticket',${t.id});},200);">
                  <div class="atc-top">
                    <h3 class="atc-title">${escapeHtml(t.subject || "تیکت")}</h3>
                    <span class="badge badge-yellow">${escapeHtml(t.status || "باز")}</span>
                  </div>
                  <p class="atc-preview">${escapeHtml((t.message || "").slice(0, 90))}</p>
                  <small style="color:var(--text-muted);">${escapeHtml(t.createdAt || "")}</small>
                </article>`,
                      )
                      .join("")
                  : '<div class="admin-empty" style="padding:16px;">تیکت بدون پاسخی نیست</div>'
              }
            </div>
            <h4 class="fab-inbox-title">✅ پاسخ داده‌شده (${answered.length})</h4>
            <div class="admin-card-list">
              ${
                answered.length
                  ? answered
                      .map(
                        (t) => `
                <article class="admin-ticket-card" style="cursor:pointer;" onclick="closeModal('supportModal');navigate('support');setTimeout(function(){openUserChat('ticket',${t.id});},200);">
                  <div class="atc-top">
                    <h3 class="atc-title">${escapeHtml(t.subject || "تیکت")}</h3>
                    <span class="badge badge-green">${escapeHtml(t.status || "بسته")}</span>
                  </div>
                  <p class="atc-preview">${escapeHtml((t.message || "").slice(0, 90))}</p>
                  <small style="color:var(--text-muted);">${escapeHtml(t.createdAt || "")}</small>
                </article>`,
                      )
                      .join("")
                  : '<div class="admin-empty" style="padding:16px;">هنوز پاسخ داده‌شده‌ای نیست</div>'
              }
            </div>
          </div>`;
        footer.innerHTML = `<button class="btn btn-outline" onclick="closeModal('supportModal')">بستن</button>`;
        openModalById("supportModal");
      }
      window.openSupportModal = openSupportModal;

      window.showFabNewTicketForm = function () {
        const slot = document.getElementById("fabNewTicketSlot");
        if (!slot) return;
        slot.classList.remove("hidden");
        slot.innerHTML = "";
        const wrap = document.createElement("div");
        wrap.className = "form-card";
        wrap.style.cssText = "margin-bottom:14px;padding:14px;";
        wrap.innerHTML = fabTicketFormHtml(currentUserKey() || {});
        const actions = document.createElement("div");
        actions.style.cssText = "display:flex;gap:8px;margin-top:10px;flex-wrap:wrap;";
        const send = document.createElement("button");
        send.className = "btn btn-primary";
        send.textContent = "ارسال تیکت";
        send.onclick = function () { submitSupportFab(); };
        const cancel = document.createElement("button");
        cancel.className = "btn btn-outline";
        cancel.textContent = "انصراف";
        cancel.onclick = function () { slot.classList.add("hidden"); };
        actions.appendChild(send);
        actions.appendChild(cancel);
        wrap.appendChild(actions);
        slot.appendChild(wrap);
        slot.scrollIntoView({ behavior: "smooth", block: "nearest" });
      };

      window.submitSupportFab = function () {
        const subject = document.getElementById("sfSubject")?.value.trim();
        const name = document.getElementById("sfName")?.value.trim();
        const contact = document.getElementById("sfContact")?.value.trim();
        const message = document.getElementById("sfMessage")?.value.trim();
        if (!subject || !name || !contact || !message) {
          showToast("لطفاً تمام فیلدهای الزامی را پر کنید", "error");
          return;
        }
        const k = currentUserKey();
        DB.tickets.unshift({
          id: Date.now(),
          userId: k ? k.userId : null,
          subject,
          name,
          contact,
          email: k ? k.email : "",
          priority: document.getElementById("sfPriority")?.value || "عادی",
          message,
          status: "باز",
          replies: [],
          createdAt: new Date().toLocaleString("fa-IR"),
        });
        saveDB(DB);
        logActivity("ثبت تیکت از دکمه شناور", subject);
        closeModal("supportModal");
        showSuccessModal(
          "پیام شما ارسال شد",
          "تیکت ثبت شد. با زدن دوباره دکمه 💬 لیست تیکت‌هایتان را می‌بینید.",
        );
      };

      function updateSupportFabVisibility() {
        const fab = document.getElementById("supportFab");
        const stack = document.getElementById("fabStack");
        const hash = (window.location.hash.slice(1) || "home").split("/")[0];
        if (hash === "admin") {
          if (stack) stack.style.display = "none";
          if (fab) fab.style.display = "none";
        } else {
          if (stack) stack.style.display = "flex";
          if (fab) fab.style.display = "flex";
          renderQuickLinksFabs();
        }
      }

      // ==================== AUTH ====================

      // ==================== HEADER AUTH / USER PANEL ====================
      const PROFILE_AVATARS = ["profile1", "profile2", "profile3", "profile4"];

      function avatarUrl(key) {
        const k = PROFILE_AVATARS.includes(key) ? key : "profile1";
        return "images/" + k + ".png";
      }

      function updateAuthUI() {
        const area = document.getElementById("authArea");
        if (!area) return;
        const u = DB.currentUser;
        if (!u) {
          area.innerHTML = `<button class="btn btn-outline btn-sm" id="loginBtn" onclick="openLoginModal()">ورود</button>`;
          return;
        }
        // load full user for avatar
        const full = DB.users.find((x) => x.id === u.id) || u;
        const av = avatarUrl(full.avatar || "profile1");
        const staff = full.role === "owner" || full.role === "admin";
        area.innerHTML = `
          <div class="user-menu">
            ${staff ? `<button class="btn btn-primary btn-sm" onclick="navigate('admin')">پنل مدیریت</button>` : ""}
            <button type="button" class="user-chip" onclick="openUserProfile()" title="پنل کاربری">
              <img class="user-chip-avatar" src="${av}" alt="پروفایل" />
              <span class="user-chip-name">${escapeHtml(full.name || "کاربر")}</span>
            </button>
            <button class="btn btn-outline btn-sm" onclick="logout()">خروج</button>
          </div>`;
      }

      window.openUserProfile = function () {
        if (!DB.currentUser) {
          openLoginModal();
          return;
        }
        const full = DB.users.find((x) => x.id === DB.currentUser.id);
        if (!full) return;
        const av = full.avatar || "profile1";
        document.getElementById("userProfileBody").innerHTML = `
          <div class="profile-avatars">
            ${PROFILE_AVATARS.map(
              (k) => `
              <button type="button" class="profile-avatar-opt ${av === k ? "selected" : ""}" data-av="${k}" onclick="selectProfileAvatar('${k}')">
                <img src="${avatarUrl(k)}" alt="${k}" />
              </button>`,
            ).join("")}
          </div>
          <p style="text-align:center;font-size:0.85rem;color:var(--text-muted);margin-bottom:14px;">یکی از ۴ تصویر پروفایل را انتخاب کنید</p>
          <div class="form-group"><label>نام و نام خانوادگی</label><input id="upName" value="${escapeHtml(full.name || "")}"></div>
          <div class="form-group"><label>شماره موبایل</label><input id="upMobile" value="${escapeHtml(full.mobile || "")}"></div>
          <div class="form-group"><label>ایمیل</label><input id="upEmail" type="email" value="${escapeHtml(full.email || "")}"></div>
          <div class="form-group"><label>رمز عبور جدید (اختیاری)</label><input id="upPassword" type="password" placeholder="خالی بگذارید اگر تغییر نمی‌دهید"></div>
        `;
        window._selectedAvatar = av;
        openModalById("userProfileModal");
      };

      window.selectProfileAvatar = function (key) {
        window._selectedAvatar = key;
        document.querySelectorAll(".profile-avatar-opt").forEach((b) => {
          b.classList.toggle("selected", b.dataset.av === key);
        });
      };

      window.saveUserProfile = function () {
        if (!DB.currentUser) return;
        const full = DB.users.find((x) => x.id === DB.currentUser.id);
        if (!full) return;
        const name = document.getElementById("upName").value.trim();
        const mobile = document.getElementById("upMobile").value.trim();
        const email = document.getElementById("upEmail").value.trim();
        const pass = document.getElementById("upPassword").value;
        if (!name || !mobile || !email) {
          showToast("نام، موبایل و ایمیل الزامی است", "error");
          return;
        }
        full.name = name;
        full.mobile = mobile;
        full.email = email;
        full.avatar = window._selectedAvatar || "profile1";
        if (pass && pass.length >= 6) full.password = pass;
        DB.currentUser = {
          id: full.id,
          name: full.name,
          email: full.email,
          role: full.role,
          permissions: full.permissions || [],
          avatar: full.avatar,
        };
        saveDB(DB);
        updateAuthUI();
        closeModal("userProfileModal");
        showToast("پروفایل ذخیره شد");
        logActivity("ویرایش پروفایل کاربری", full.email);
      };



      // ==================== OTP (نسخه آزمایشی — آماده اتصال پیامک) ====================
      window._loginOtp = null;

      window.sendLoginOtp = function () {
        const btn = document.getElementById("btnSendOtp");
        if (btn && btn.disabled) return;
        const mobileRaw = document.getElementById("loginMobile")?.value || "";
        const mobile = normalizeMobile(mobileRaw);
        if (!mobile || mobile.length < 10) {
          showToast("شماره موبایل معتبر وارد کنید (مثال: 09123456789)", "error");
          return;
        }
        if (mobile.length > 12) {
          showToast("شماره موبایل بیش از حد طولانی است", "error");
          return;
        }
        const code = String(Math.floor(10000 + Math.random() * 90000));
        window._loginOtp = {
          mobile,
          code,
          expires: Date.now() + 5 * 60 * 1000,
        };
        const hint = document.getElementById("otpHint");
        if (hint) {
          hint.innerHTML =
            'کد برای <b dir="ltr">' +
            mobile +
            '</b> ارسال شد. <span style="color:var(--primary)">کد دمو: <b dir="ltr">' +
            code +
            "</b></span> — تا اتصال پیامک واقعی، کد همین‌جا دیده می‌شود.";
        }
        showToast("کد تأیید ارسال شد");
        const otpInput = document.getElementById("loginOtp");
        if (otpInput) {
          otpInput.value = "";
          otpInput.focus();
        }
        // شمارش معکوس ارسال مجدد
        let left = 60;
        if (btn) {
          btn.disabled = true;
          const tick = () => {
            if (!document.getElementById("btnSendOtp")) return;
            if (left <= 0) {
              btn.disabled = false;
              btn.textContent = "ارسال کد";
              return;
            }
            btn.textContent = "ارسال مجدد (" + left + ")";
            left--;
            window._otpTimer = setTimeout(tick, 1000);
          };
          clearTimeout(window._otpTimer);
          tick();
        }
        // نقطه اتصال پیامک واقعی بعداً:
        // fetch('/api/sms.php', { method:'POST', body: JSON.stringify({ mobile, code }) })
      };


      function openLoginModal() {
        window._loginOtp = null;
        const hint = document.getElementById("otpHint");
        if (hint) hint.textContent = "";
        const otp = document.getElementById("loginOtp");
        if (otp) otp.value = "";
        openModalById("loginModal");
      }
      function closeModal(id) {
        const el = document.getElementById(id);
        if (el) el.classList.remove("open");
        // اگر هیچ مودالی باز نیست، اسکرول صفحه آزاد شود
        if (!document.querySelector(".modal-overlay.open")) {
          document.body.classList.remove("modal-open");
        }
      }

      function openModalById(id) {
        const el = document.getElementById(id);
        if (!el) return;
        el.classList.add("open");
        document.body.classList.add("modal-open");
      }

      function normalizeMobile(m) {
        if (!m) return "";
        const map = { "۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9" };
        return String(m).replace(/[۰-۹٠-٩]/g, (ch) => map[ch] || ch).replace(/\D/g, "");
      }

      window.handleLogin = function () {
        const email = document.getElementById("loginEmail").value.trim().toLowerCase();
        const mobileRaw = document.getElementById("loginMobile").value.trim();
        const mobile = normalizeMobile(mobileRaw);
        const password = document.getElementById("loginPassword").value;
        const otpEntered = (document.getElementById("loginOtp")?.value || "").trim();
        if (!mobile) {
          showToast("شماره موبایل الزامی است", "error");
          return;
        }
        if (!window._loginOtp || window._loginOtp.mobile !== mobile) {
          showToast("ابتدا دکمه «ارسال کد» را بزنید", "error");
          return;
        }
        if (Date.now() > window._loginOtp.expires) {
          showToast("کد منقضی شده — دوباره ارسال کنید", "error");
          window._loginOtp = null;
          return;
        }
        if (otpEntered !== window._loginOtp.code) {
          showToast("کد تأیید اشتباه است", "error");
          return;
        }
        if (!email || !password) {
          showToast("ایمیل و رمز عبور الزامی است", "error");
          return;
        }
        if (password.length < 6) {
          showToast("رمز عبور حداقل ۶ کاراکتر باشد", "error");
          return;
        }
        if (!DB.users) DB.users = [];

        // نرمال‌سازی موبایل کاربران قدیمی
        DB.users.forEach((u) => {
          if (u.mobile) u.mobile = normalizeMobile(u.mobile);
          if (u.email) u.email = String(u.email).trim().toLowerCase();
        });

        const byEmail = DB.users.find((u) => u.email === email);
        const byMobile = DB.users.find((u) => normalizeMobile(u.mobile) === mobile);

        let user = null;
        let isNew = false;

        if (byEmail) {
          // ورود با ایمیل
          if (byEmail.password !== password) {
            showToast("رمز عبور برای این ایمیل اشتباه است", "error");
            return;
          }
          user = byEmail;
          // به‌روزرسانی موبایل اگر خالی بود یا متفاوت
          if (mobile) user.mobile = mobile;
        } else if (byMobile) {
          // ایمیل جدید است ولی موبایل قبلاً ثبت شده → ورود با موبایل
          if (byMobile.password !== password) {
            showToast("این شماره قبلاً ثبت شده و رمز عبور اشتباه است", "error");
            return;
          }
          user = byMobile;
          // ایمیل را به‌روز نکن مگر خالی باشد
          if (!user.email) user.email = email;
        } else {
          // ثبت‌نام کاربر جدید
          isNew = true;
          user = {
            id: Date.now(),
            name: email.split("@")[0],
            email,
            mobile,
            password,
            role: "user",
            status: "active",
            avatar: "profile1",
            permissions: [],
            createdAt: new Date().toLocaleDateString("fa-IR"),
          };
          DB.users.push(user);
          logActivity("ثبت‌نام کاربر جدید", email);
        }

        if (user.status === "blocked") {
          showToast("حساب شما مسدود شده است", "error");
          return;
        }
        if (!user.avatar) user.avatar = "profile1";
        DB.currentUser = {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          permissions: user.permissions || [],
          avatar: user.avatar || "profile1",
        };
        saveDB(DB);
        window._loginOtp = null;
        closeModal("loginModal");
        updateAuthUI();
        showToast(isNew ? "ثبت‌نام و ورود موفق بود" : "ورود موفقیت‌آمیز بود");
        if (user.role === "admin" || user.role === "owner") {
          showQuickAdminBar();
          syncQuickSeasonSelect();
        } else {
          hideQuickAdminBar();
        }
        render();
        logActivity(isNew ? "ثبت‌نام کاربر" : "ورود کاربر", user.email);
      };

      // ==================== ADMIN ====================
      function renderAdmin(page, param) {
        if (!isStaff()) {
          document.getElementById("app").innerHTML = `
            <div style="min-height:100vh;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:20px;text-align:center;padding:20px;">
                <h2>دسترسی محدود</h2>
                <p>برای ورود به پنل مدیریت ابتدا وارد شوید.</p>
                <button class="btn btn-primary" onclick="openLoginModal()">ورود</button>
                <button class="btn btn-outline" onclick="navigate('home')">بازگشت به سایت</button>
            </div>`;
          return;
        }
        const section = param || "dashboard";
        // permission gate for section
        const sectionPerm = {
          dashboard: "dashboard",
          products: "products",
          support: "support",
          consults: "support",
          tickets: "support",
          users: "users",
          pages: "pages_edit",
          settings: "settings",
          activity: "activity",
        };
        const need = sectionPerm[section] || "dashboard";
        if (!hasPermission(need)) {
          // fall back to first allowed section
          const first = ALL_PERMISSIONS.find((p) =>
            ["dashboard","products","support","users","pages_edit","settings","activity"].includes(p.key) && hasPermission(p.key)
          );
          if (first && first.key !== section) {
            navigate("admin", first.key === "dashboard" ? null : first.key);
            return;
          }
          document.getElementById("app").innerHTML = `
            <div style="min-height:100vh;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:16px;padding:20px;text-align:center;">
              <h2>بدون دسترسی</h2>
              <p>هیچ بخشی از پنل برای شما فعال نشده است. با مالک هماهنگ کنید.</p>
              <button class="btn btn-outline" onclick="navigate('home')">بازگشت</button>
            </div>`;
          return;
        }

        const link = (key, href, label, onclick, sectionKey) => {
          if (!hasPermission(key)) return "";
          const sk = sectionKey || key;
          const active = section === sk;
          return `<a href="${href}" class="${active ? "active" : ""}" onclick="${onclick}">${label}</a>`;
        };

        document.getElementById("app").innerHTML = `
        <div class="admin-layout">
            <div class="admin-overlay" id="adminOverlay" onclick="closeAdminSidebar()"></div>
            <aside class="admin-sidebar" id="adminSidebar">
                <div class="logo">
                    <div style="display:flex;align-items:center;gap:10px;"><div class="logo-icon">🌱</div><span>پنل مدیریت</span></div>
                    <button class="btn-icon admin-sidebar-close" onclick="closeAdminSidebar()">×</button>
                </div>
                <nav class="admin-nav">
                    ${link("dashboard", "#admin", "📊 داشبورد", "navigate('admin')")}
                    ${link("products", "#admin/products", "📦 محصولات", "navigate('admin','products')")}
                    ${link("support", "#admin/support", "🎧 پشتیبانی", "navigate('admin','support')")}
                    ${link("users", "#admin/users", "👥 کاربران", "navigate('admin','users')")}
                    ${link("pages_edit", "#admin/pages", "📄 محتوای صفحات", "navigate('admin','pages')", "pages")}
                    ${link("settings", "#admin/settings", "⚙️ تنظیمات", "navigate('admin','settings')")}
                    ${link("activity", "#admin/activity", "📋 فعالیت‌ها", "navigate('admin','activity')")}
                    <a href="#home" onclick="navigate('home')">🏠 بازگشت به سایت</a>
                    <a href="#" onclick="logout()" style="color:#C62828;">🚪 خروج</a>
                </nav>
            </aside>
            <main class="admin-main">
                <div class="admin-mobile-bar">
                    <button type="button" class="btn-icon" onclick="toggleAdminSidebar()" aria-label="منو">☰</button>
                    <div class="logo"><div class="logo-icon">🌱</div><span>پنل مدیریت</span></div>
                    <button type="button" class="btn-icon" onclick="navigate('home')" title="سایت">🏠</button>
                </div>
                <div id="adminContent"></div>
            </main>
        </div>`;
        renderAdminSection(section);
      }

      function renderAdminSection(section) {
        try { closeAdminSidebar(); } catch (e) {}
        const el = document.getElementById("adminContent");
        if (!el) return;
        switch (section) {
          case "dashboard":
            renderAdminDashboard(el);
            break;
          case "products":
            renderAdminProducts(el);
            break;
          case "support":
          case "consults":
          case "tickets":
            renderAdminSupport(el);
            break;
          case "users":
            renderAdminUsers(el);
            break;
          case "pages":
            renderAdminPages(el);
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
        const supportOpen = newConsults + openTickets;
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
            <h3 class="admin-section-title">فعالیت‌های اخیر</h3>
            <div class="admin-card-list">
              ${
                DB.activityLog.slice(0, 8).length
                  ? DB.activityLog
                      .slice(0, 8)
                      .map(
                        (a) => `
                  <article class="admin-activity-card compact">
                    <div class="aac-icon">📋</div>
                    <div class="aac-body">
                      <div class="aac-top"><strong>${escapeHtml(a.action)}</strong><small>${escapeHtml(a.time)}</small></div>
                      <div class="aac-meta">${escapeHtml(a.user || "")} — ${escapeHtml(a.detail || "")}</div>
                    </div>
                  </article>`,
                      )
                      .join("")
                  : `<div class="admin-empty">فعالیتی ثبت نشده</div>`
              }
            </div>`;
      }

      function renderAdminProducts(el) {
        const folder = window._adminProductFolder || null; // null = list of category folders
        const q = (window._adminProductQuery || "").trim().toLowerCase();

        if (!folder) {
          // Folder view
          const cats = getAllCategories();
          el.innerHTML = `
            <div class="admin-header">
              <h1>محصولات</h1>
              <div class="admin-header-actions">
                <button class="btn btn-outline" onclick="openCategoryModal()">+ دسته‌بندی</button>
                <button class="btn btn-primary" onclick="openProductModal()">+ محصول جدید</button>
              </div>
            </div>
            <p class="admin-lead">روی هر پوشه بزنید تا محصولات همان دسته را ببینید و ویرایش کنید.</p>
            <div class="admin-search-bar">
              <input type="search" placeholder="جستجوی دسته‌بندی..." value="${escapeHtml(window._adminCatQuery || "")}" oninput="filterAdminFolders(this.value)" />
              <span class="admin-search-count">${cats.length} دسته</span>
            </div>
            <div class="admin-folder-grid" id="adminFolderGrid">
              ${cats
                .filter((c) => {
                  const cq = (window._adminCatQuery || "").trim().toLowerCase();
                  return !cq || c.toLowerCase().includes(cq);
                })
                .map((c) => {
                  const count = productsInCategory(c, false).length;
                  return `
                  <button type="button" class="admin-folder-card" onclick="openAdminProductFolder('${String(c).replace(/'/g, "\\'")}')">
                    <div class="afc-icon">📁</div>
                    <div class="afc-body">
                      <strong>${escapeHtml(c)}</strong>
                      <span>${count} محصول</span>
                    </div>
                    <span class="afc-arrow">‹</span>
                  </button>`;
                })
                .join("") || '<div class="admin-empty">دسته‌بندی‌ای نیست. یکی اضافه کنید.</div>'}
            </div>
            <div class="modal-overlay" id="categoryModal">
              <div class="modal" style="max-width:420px;">
                <div class="modal-header"><h3>دسته‌بندی جدید</h3><button class="modal-close" onclick="closeModal('categoryModal')">×</button></div>
                <div class="modal-body">
                  <div class="form-group"><label>نام دسته‌بندی</label><input id="newCategoryName" placeholder="مثلاً کود گیاهی" /></div>
                </div>
                <div class="modal-footer">
                  <button class="btn btn-outline" onclick="closeModal('categoryModal')">انصراف</button>
                  <button class="btn btn-primary" onclick="saveNewCategory()">ذخیره</button>
                </div>
              </div>
            </div>
            <div class="modal-overlay" id="productModal">
              <div class="modal" style="max-width:700px;">
                <div class="modal-header"><h3 id="productModalTitle">محصول جدید</h3><button class="modal-close" onclick="closeModal('productModal')">×</button></div>
                <div class="modal-body" id="productModalBody"></div>
                <div class="modal-footer">
                  <button class="btn btn-outline" onclick="closeModal('productModal')">انصراف</button>
                  <button class="btn btn-primary" onclick="saveProduct()">ذخیره</button>
                </div>
              </div>
            </div>`;
          return;
        }

        // Products inside a folder
        let list = productsInCategory(folder, false);
        if (q) {
          list = list.filter((p) =>
            [p.name, p.type, p.shortDesc, p.brand]
              .filter(Boolean)
              .join(" ")
              .toLowerCase()
              .includes(q),
          );
        }
        el.innerHTML = `
          <div class="admin-header">
            <h1>
              <button type="button" class="btn btn-sm btn-outline" onclick="closeAdminProductFolder()" style="margin-left:8px;">→ بازگشت</button>
              ${escapeHtml(folder)}
            </h1>
            <button class="btn btn-primary" onclick="openProductModal(null, '${String(folder).replace(/'/g, "\\'")}')">+ محصول در این دسته</button>
          </div>
          <div class="admin-search-bar">
            <input type="search" id="adminProductSearch" placeholder="جستجو در این دسته..." value="${escapeHtml(window._adminProductQuery || "")}" oninput="filterAdminProducts(this.value)" />
            <span class="admin-search-count">${list.length} محصول</span>
          </div>
          <div class="admin-product-list">
            ${
              list.length
                ? list
                    .map((p) => {
                      const img = (p.images && p.images[0]) || p.image || "";
                      return `
                <article class="admin-product-row">
                  <div class="apr-thumb">${img ? `<img src="${img}" alt="" loading="lazy" />` : `<span class="apr-placeholder">🌿</span>`}</div>
                  <div class="apr-body">
                    <div class="apr-top">
                      <h3 class="apr-name">${escapeHtml(p.name)}</h3>
                      <span class="badge ${p.status === "active" ? "badge-green" : "badge-gray"}">${p.status === "active" ? "فعال" : "غیرفعال"}</span>
                    </div>
                    <div class="apr-meta"><span>${escapeHtml(p.type || "—")}</span></div>
                    <p class="apr-desc">${escapeHtml((p.shortDesc || "").slice(0, 90))}</p>
                    <div class="apr-actions">
                      <button class="btn btn-sm btn-outline" onclick="openProductModal(${p.id})">ویرایش</button>
                      <button class="btn btn-sm btn-secondary" onclick="toggleProduct(${p.id})">${p.status === "active" ? "غیرفعال" : "فعال"}</button>
                      <button class="btn btn-sm" style="background:#C62828;color:#fff;" onclick="deleteProduct(${p.id})">حذف</button>
                    </div>
                  </div>
                </article>`;
                    })
                    .join("")
                : `<div class="admin-empty">محصولی در این دسته نیست</div>`
            }
          </div>
          <div class="modal-overlay" id="productModal">
            <div class="modal" style="max-width:700px;">
              <div class="modal-header"><h3 id="productModalTitle">محصول جدید</h3><button class="modal-close" onclick="closeModal('productModal')">×</button></div>
              <div class="modal-body" id="productModalBody"></div>
              <div class="modal-footer">
                <button class="btn btn-outline" onclick="closeModal('productModal')">انصراف</button>
                <button class="btn btn-primary" onclick="saveProduct()">ذخیره</button>
              </div>
            </div>
          </div>`;
      }

      window.filterAdminFolders = function (val) {
        window._adminCatQuery = val || "";
        const el = document.getElementById("adminContent");
        if (el) renderAdminProducts(el);
      };

      window.openAdminProductFolder = function (cat) {
        window._adminProductFolder = cat;
        window._adminProductQuery = "";
        const el = document.getElementById("adminContent");
        if (el) renderAdminProducts(el);
      };

      window.closeAdminProductFolder = function () {
        window._adminProductFolder = null;
        window._adminProductQuery = "";
        const el = document.getElementById("adminContent");
        if (el) renderAdminProducts(el);
      };

      window.filterAdminProducts = function (val) {
        window._adminProductQuery = val || "";
        const el = document.getElementById("adminContent");
        if (el) renderAdminProducts(el);
        const input = document.getElementById("adminProductSearch");
        if (input) {
          input.focus();
          try {
            const len = input.value.length;
            input.setSelectionRange(len, len);
          } catch (e) {}
        }
      };

      window.openCategoryModal = function () {
        document.getElementById("newCategoryName").value = "";
        openModalById("categoryModal");
      };

      window.saveNewCategory = function () {
        const name = document.getElementById("newCategoryName").value.trim();
        if (!name) {
          showToast("نام دسته را وارد کنید", "error");
          return;
        }
        if (!DB.categories) DB.categories = [];
        if (getAllCategories().includes(name)) {
          showToast("این دسته از قبل هست", "error");
          return;
        }
        DB.categories.push(name);
        saveDB(DB);
        closeModal("categoryModal");
        showToast("دسته‌بندی اضافه شد");
        logActivity("افزودن دسته‌بندی", name);
        const el = document.getElementById("adminContent");
        if (el) renderAdminProducts(el);
      };

      window.openProductModal = function (id, defaultCategory) {
        if (id === null || id === undefined || id === "null") id = null;
        const p = id ? DB.products.find((x) => x.id === id) : null;
        window.editingProductId = id || null;
        // اطمینان از حداقل یک دسته
        if (!getAllCategories().length) {
          if (!DB.categories) DB.categories = [];
          DB.categories.push(defaultCategory || "عمومی");
        }
        document.getElementById("productModalTitle").textContent = p
          ? "ویرایش محصول"
          : "محصول جدید";
        document.getElementById("productModalBody").innerHTML = `
            <div class="form-group"><label>نام محصول *</label><input id="pName" value="${p ? escapeHtml(p.name) : ""}"></div>
            <div class="form-row">
                <div class="form-group"><label>دسته‌بندی</label>
                    <select id="pCategory">
                        ${(function(){
                          const cats = getAllCategories();
                          const pref = (p && p.category) || defaultCategory || (cats[0] || "");
                          return cats.map((c) => {
                            const sel = c === pref;
                            return '<option value="' + escapeHtml(c) + '" ' + (sel ? "selected" : "") + '>' + escapeHtml(c) + '</option>';
                          }).join("");
                        })()}
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
            </div>
            <div class="form-group" style="margin-top:20px;padding-top:16px;border-top:1px solid var(--border);">
              <label>رسانه محصول (چند عکس + یک ویدیو)</label>
              <p style="font-size:0.8rem;color:var(--text-muted);margin:6px 0 10px;">عکس و ویدیو در مرورگر ذخیره می‌شود؛ فایل خیلی بزرگ ممکن است فضای localStorage را پر کند (ترجیحاً زیر ۲ مگابایت).</p>
              <input type="file" id="pImagesInput" accept="image/*" multiple style="margin-bottom:10px;" />
              <div class="media-gallery" id="pImagesPreview"></div>
              <label style="margin-top:14px;display:block;">ویدیو (یک فایل)</label>
              <input type="file" id="pVideoInput" accept="video/*" style="margin-top:6px;" />
              <div id="pVideoPreview" style="margin-top:10px;"></div>
              <button type="button" class="btn btn-sm btn-outline" style="margin-top:8px;" onclick="clearProductVideo()">حذف ویدیو</button>
            </div>`;
        window._editingImages = p && p.images ? [...p.images] : (p && p.image ? [p.image] : []);
        window._editingVideo = p && p.video ? p.video : "";
        openModalById("productModal");
        setTimeout(() => {
          bindProductMediaInputs();
          renderProductMediaPreview();
        }, 0);
      };

      function renderProductMediaPreview() {
        const box = document.getElementById("pImagesPreview");
        const vbox = document.getElementById("pVideoPreview");
        if (!box) return;
        box.innerHTML = (window._editingImages || [])
          .map(
            (src, i) => `
          <div class="media-thumb">
            <img src="${src}" alt="" />
            <button type="button" class="media-remove" onclick="removeProductImage(${i})">×</button>
          </div>`,
          )
          .join("") || '<span style="color:var(--text-muted);font-size:0.85rem;">عکسی نیست</span>';
        if (vbox) {
          vbox.innerHTML = window._editingVideo
            ? `<video src="${window._editingVideo}" controls style="max-width:100%;max-height:180px;border-radius:10px;"></video>`
            : '<span style="color:var(--text-muted);font-size:0.85rem;">ویدیویی نیست</span>';
        }
      }

      function bindProductMediaInputs() {
        const imgInput = document.getElementById("pImagesInput");
        const vidInput = document.getElementById("pVideoInput");
        if (imgInput) {
          imgInput.onchange = async () => {
            if (!hasPermission("media") && !isOwner()) {
              showToast("دسترسی رسانه ندارید", "error");
              imgInput.value = "";
              return;
            }
            const files = [...imgInput.files];
            for (const f of files) {
              if (f.size > 2.5 * 1024 * 1024) {
                showToast("حجم عکس بیش از ۲.۵ مگابایت: " + f.name, "error");
                continue;
              }
              const dataUrl = await readFileAsDataURL(f);
              window._editingImages.push(dataUrl);
            }
            imgInput.value = "";
            renderProductMediaPreview();
          };
        }
        if (vidInput) {
          vidInput.onchange = async () => {
            if (!hasPermission("media") && !isOwner()) {
              showToast("دسترسی رسانه ندارید", "error");
              vidInput.value = "";
              return;
            }
            const f = vidInput.files[0];
            if (!f) return;
            if (f.size > 8 * 1024 * 1024) {
              showToast("ویدیو بزرگ‌تر از ۸ مگابایت است", "error");
              vidInput.value = "";
              return;
            }
            window._editingVideo = await readFileAsDataURL(f);
            vidInput.value = "";
            renderProductMediaPreview();
          };
        }
      }

      function readFileAsDataURL(file) {
        return new Promise((resolve, reject) => {
          const r = new FileReader();
          r.onload = () => resolve(r.result);
          r.onerror = reject;
          r.readAsDataURL(file);
        });
      }

      window.removeProductImage = function (i) {
        window._editingImages.splice(i, 1);
        renderProductMediaPreview();
      };
      window.clearProductVideo = function () {
        window._editingVideo = "";
        renderProductMediaPreview();
      };


      window.saveProduct = function () {
        const nameEl = document.getElementById("pName");
        if (!nameEl) {
          showToast("فرم محصول آماده نیست — دوباره باز کنید", "error");
          return;
        }
        const name = nameEl.value.trim();
        if (!name) {
          showToast("نام محصول الزامی است", "error");
          return;
        }
        const catEl = document.getElementById("pCategory");
        let category = catEl ? catEl.value.trim() : "";
        if (!category) {
          category = (window._adminProductFolder) || "عمومی";
          if (!DB.categories) DB.categories = [];
          if (!DB.categories.includes(category)) DB.categories.push(category);
        }
        const data = {
          name,
          category,
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
          images: window._editingImages || [],
          video: window._editingVideo || "",
          image: (window._editingImages && window._editingImages[0]) || "",
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
          data.image = data.image || "";
          data.images = data.images || [];
          data.video = data.video || "";
          data.country = "ایران";
          data.brand = DB.settings.companyName;
          data.faq = [];
          data.related = [];
          DB.products.push(data);
          DB.stats.products = DB.products.length;
          logActivity("ایجاد محصول", name);
        }
        if (data.category) {
          if (!DB.categories) DB.categories = [];
          if (!DB.categories.includes(data.category)) DB.categories.push(data.category);
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


      function supportUserFolders() {
        const map = new Map();
        const add = (item, kind) => {
          const mobile = normalizeMobile(item.mobile || item.contact || "");
          const email = (item.email || (item.contact && item.contact.includes("@") ? item.contact : "") || "").toLowerCase();
          const key = item.userId
            ? "uid:" + item.userId
            : mobile
              ? "m:" + mobile
              : email
                ? "e:" + email
                : "x:" + item.id;
          if (!map.has(key)) {
            map.set(key, {
              key,
              userId: item.userId || null,
              name: item.name || "کاربر",
              mobile,
              email,
              items: [],
            });
          }
          const folder = map.get(key);
          if (item.name) folder.name = item.name;
          if (mobile) folder.mobile = mobile;
          if (email) folder.email = email;
          folder.items.push({ kind, ...item });
        };
        (DB.consultations || []).forEach((c) => add(c, "consult"));
        (DB.tickets || []).forEach((t) => add(t, "ticket"));
        return Array.from(map.values()).sort((a, b) => {
          const ta = a.items[0]?.id || 0;
          const tb = b.items[0]?.id || 0;
          return tb - ta;
        });
      }

      function renderAdminSupport(el) {
        const folderKey = window._supportFolderKey || null;
        const folders = supportUserFolders();

        if (!folderKey) {
          el.innerHTML = `
            <div class="admin-header"><h1>پشتیبانی</h1></div>
            <p class="admin-lead">هر کاربر مثل یک پوشه است. روی پوشه بزنید تا چت‌های جدید و قدیمی را ببینید.</p>
            <div class="admin-search-bar">
              <input type="search" placeholder="جستجوی نام یا موبایل..." value="${escapeHtml(window._supportFolderQuery || "")}" oninput="filterSupportFolders(this.value)" />
              <span class="admin-search-count">${folders.length} کاربر</span>
            </div>
            <div class="admin-folder-grid">
              ${
                folders
                  .filter((f) => {
                    const q = (window._supportFolderQuery || "").toLowerCase();
                    if (!q) return true;
                    return (
                      (f.name || "").toLowerCase().includes(q) ||
                      (f.mobile || "").includes(q) ||
                      (f.email || "").includes(q)
                    );
                  })
                  .map((f) => {
                    const unread = f.items.filter(
                      (i) => i.status === "جدید" || i.status === "باز",
                    ).length;
                    return `
                    <button type="button" class="admin-folder-card" onclick="openSupportUserFolder('${f.key.replace(/'/g, "\\'")}')">
                      <div class="afc-icon">👤</div>
                      <div class="afc-body">
                        <strong>${escapeHtml(f.name)}</strong>
                        <span>${escapeHtml(f.mobile || f.email || "—")} · ${f.items.length} گفتگو</span>
                      </div>
                      ${unread ? `<span class="badge badge-red">${unread} جدید</span>` : `<span class="afc-arrow">‹</span>`}
                    </button>`;
                  })
                  .join("") || '<div class="admin-empty">هنوز پیام پشتیبانی‌ای نیست</div>'
              }
            </div>`;
          return;
        }

        const folder = folders.find((f) => f.key === folderKey);
        if (!folder) {
          window._supportFolderKey = null;
          renderAdminSupport(el);
          return;
        }
        const items = folder.items.slice().sort((a, b) => (b.id || 0) - (a.id || 0));
        el.innerHTML = `
          <div class="admin-header">
            <h1>
              <button type="button" class="btn btn-sm btn-outline" onclick="closeSupportUserFolder()" style="margin-left:8px;">→ بازگشت</button>
              ${escapeHtml(folder.name)}
            </h1>
          </div>
          <p class="admin-lead">${escapeHtml(folder.mobile || "")} ${folder.email ? " · " + escapeHtml(folder.email) : ""}</p>
          <div class="admin-card-list">
            ${items
              .map((item) => {
                if (item.kind === "consult") {
                  return `
                  <article class="admin-ticket-card">
                    <div class="atc-top">
                      <div>
                        <h3 class="atc-title">🌱 مشاوره — ${escapeHtml(item.productName || "عمومی")}</h3>
                        <div class="atc-meta">${escapeHtml(item.createdAt || "")}</div>
                      </div>
                      <span class="badge ${item.status === "جدید" ? "badge-red" : item.status === "پاسخ داده شد" ? "badge-green" : "badge-yellow"}">${escapeHtml(item.status)}</span>
                    </div>
                    <p class="atc-preview">${escapeHtml((item.desc || "").slice(0, 120))}</p>
                    <div class="atc-foot">
                      <small>${(item.replies && item.replies.length) || 0} پیام</small>
                      <button class="btn btn-sm btn-outline" onclick="openSupportChat('consult', ${item.id})">باز کردن چت</button>
                    </div>
                  </article>`;
                }
                return `
                  <article class="admin-ticket-card">
                    <div class="atc-top">
                      <div>
                        <h3 class="atc-title">💬 ${escapeHtml(item.subject || "تیکت")}</h3>
                        <div class="atc-meta">${escapeHtml(item.createdAt || "")}</div>
                      </div>
                      <span class="badge ${item.status === "باز" ? "badge-red" : item.status === "بسته" ? "badge-green" : "badge-yellow"}">${escapeHtml(item.status)}</span>
                    </div>
                    <p class="atc-preview">${escapeHtml((item.message || "").slice(0, 120))}</p>
                    <div class="atc-foot">
                      <small>${(item.replies && item.replies.length) || 0} پیام</small>
                      <button class="btn btn-sm btn-outline" onclick="openSupportChat('ticket', ${item.id})">باز کردن چت</button>
                    </div>
                  </article>`;
              })
              .join("")}
          </div>
          <div class="modal-overlay" id="supportChatModal">
            <div class="modal" style="max-width:560px;">
              <div class="modal-header">
                <h3 id="supportChatTitle">گفتگو</h3>
                <button class="modal-close" onclick="closeModal('supportChatModal')">×</button>
              </div>
              <div class="modal-body">
                <div id="supportChatMeta" class="admin-lead"></div>
                <div class="chat-thread" id="supportChatThread"></div>
                <div class="form-group" style="margin-top:14px;">
                  <label>پاسخ شما</label>
                  <textarea id="supportChatReply" placeholder="پیام خود را بنویسید..."></textarea>
                </div>
              </div>
              <div class="modal-footer">
                <button class="btn btn-outline" onclick="closeModal('supportChatModal')">بستن</button>
                <button class="btn btn-primary" onclick="sendSupportReply()">ارسال پاسخ</button>
              </div>
            </div>
          </div>`;
      }

      window.filterSupportFolders = function (val) {
        window._supportFolderQuery = val || "";
        const el = document.getElementById("adminContent");
        if (el) renderAdminSupport(el);
      };
      window.openSupportUserFolder = function (key) {
        window._supportFolderKey = key;
        const el = document.getElementById("adminContent");
        if (el) renderAdminSupport(el);
      };
      window.closeSupportUserFolder = function () {
        window._supportFolderKey = null;
        const el = document.getElementById("adminContent");
        if (el) renderAdminSupport(el);
      };

      window.setSupportTab = function (tab) {
        window.supportTab = tab;
        renderAdminSection("support");
      };

      window.openSupportChat = function (kind, id) {
        window._supportChat = { kind, id };
        let title = "گفتگو";
        let meta = "";
        let threadHtml = "";
        if (kind === "consult") {
          const c = DB.consultations.find((x) => x.id === id);
          if (!c) return;
          title = "مشاوره محصول — " + c.name;
          meta = `موبایل: ${escapeHtml(c.mobile)} | محصول: ${escapeHtml(c.productName)} | کشت: ${escapeHtml(c.crop || "-")}<br>زمان تماس: ${escapeHtml(c.time || "-")}`;
          threadHtml = `<div class="chat-bubble user"><strong>${escapeHtml(c.name)}</strong><p>${escapeHtml(c.desc || "(بدون توضیح)")}</p><small>${c.createdAt}</small></div>`;
          (c.replies || []).forEach((r) => {
            threadHtml += `<div class="chat-bubble admin"><strong>پشتیبان</strong><p>${escapeHtml(r.text)}</p><small>${r.time}</small></div>`;
          });
          if (c.reply) {
            threadHtml += `<div class="chat-bubble admin"><strong>پاسخ ثبت‌شده</strong><p>${escapeHtml(c.reply)}</p></div>`;
          }
        } else {
          const t = DB.tickets.find((x) => x.id === id);
          if (!t) return;
          title = t.subject;
          meta = `نام: ${escapeHtml(t.name)} | تماس: ${escapeHtml(t.contact)} | اولویت: ${escapeHtml(t.priority)}`;
          threadHtml = `<div class="chat-bubble user"><strong>${escapeHtml(t.name)}</strong><p>${escapeHtml(t.message)}</p><small>${t.createdAt}</small></div>`;
          (t.replies || []).forEach((r) => {
            threadHtml += `<div class="chat-bubble admin"><strong>پشتیبان</strong><p>${escapeHtml(r.text)}</p><small>${r.time}</small></div>`;
          });
        }
        document.getElementById("supportChatTitle").textContent = title;
        document.getElementById("supportChatMeta").innerHTML = meta;
        document.getElementById("supportChatThread").innerHTML = threadHtml;
        document.getElementById("supportChatReply").value = "";
        openModalById("supportChatModal");
      };

      window.sendSupportReply = function () {
        const box = window._supportChat;
        if (!box) return;
        const text = document.getElementById("supportChatReply").value.trim();
        if (!text) {
          showToast("متن پاسخ خالی است", "error");
          return;
        }
        const reply = {
          text,
          time: new Date().toLocaleString("fa-IR"),
          by: DB.currentUser ? DB.currentUser.name : "پشتیبان",
        };
        if (box.kind === "consult") {
          const c = DB.consultations.find((x) => x.id === box.id);
          if (!c) return;
          if (!c.replies) c.replies = [];
          c.replies.push(reply);
          c.reply = text;
          c.status = "پاسخ داده شد";
        } else {
          const t = DB.tickets.find((x) => x.id === box.id);
          if (!t) return;
          if (!t.replies) t.replies = [];
          t.replies.push(reply);
          t.status = "در حال بررسی";
        }
        saveDB(DB);
        logActivity("پاسخ پشتیبانی", text.slice(0, 40));
        showToast("پاسخ ارسال و ذخیره شد");
        openSupportChat(box.kind, box.id);
      };

window.updateConsultStatus = function (id, status) {
        const c = DB.consultations.find((x) => x.id === id);
        if (c) {
          c.status = status;
          saveDB(DB);
          logActivity("تغییر وضعیت مشاوره", c.name + " → " + status);
          showToast("وضعیت به‌روز شد");
        }
      };
window.updateTicketStatus = function (id, status) {
        const t = DB.tickets.find((x) => x.id === id);
        if (t) {
          t.status = status;
          saveDB(DB);
          logActivity("تغییر وضعیت تیکت", t.subject);
          showToast("وضعیت به‌روز شد");
        }
      };

      function renderAdminUsers(el) {
        const canManage = isOwner() || hasPermission("users");
        const q = (window._adminUserQuery || "").trim().toLowerCase();
        let list = DB.users.slice();
        if (q) {
          list = list.filter((u) =>
            [u.name, u.email, u.mobile, u.role]
              .filter(Boolean)
              .join(" ")
              .toLowerCase()
              .includes(q),
          );
        }
        el.innerHTML = `
          <div class="admin-header">
            <h1>کاربران</h1>
          </div>
          <p class="admin-lead">مالک می‌تواند برای هر مدیر مشخص کند کدام بخش‌های پنل فعال باشد.</p>
          <div class="admin-search-bar">
            <input type="search" id="adminUserSearch" placeholder="جستجوی نام، ایمیل یا موبایل..." value="${escapeHtml(window._adminUserQuery || "")}" oninput="filterAdminUsers(this.value)" />
            <span class="admin-search-count">${list.length} نفر</span>
          </div>
          <div class="admin-card-list">
            ${
              list.length
                ? list
                    .map((u) => {
                      const roleLabel =
                        u.role === "owner" ? "مالک" : u.role === "admin" ? "مدیر" : "کاربر";
                      const roleClass =
                        u.role === "owner" ? "role-owner" : u.role === "admin" ? "role-admin" : "role-user";
                      const av = avatarUrl(u.avatar || "profile1");
                      const permsText =
                        u.role === "owner"
                          ? "همه دسترسی‌ها"
                          : u.role === "admin"
                            ? u.permissions && u.permissions.length
                              ? u.permissions
                                  .map((k) => (ALL_PERMISSIONS.find((p) => p.key === k) || { label: k }).label)
                                  .join(" · ")
                              : "بدون دسترسی"
                            : "—";
                      return `
                <article class="admin-user-card">
                  <div class="auc-avatar"><img src="${av}" alt="" /></div>
                  <div class="auc-body">
                    <div class="auc-top">
                      <div>
                        <h3 class="auc-name">${escapeHtml(u.name || "بدون نام")}</h3>
                        <div class="auc-meta">
                          <span>${escapeHtml(u.email || "—")}</span>
                          <span class="dot">·</span>
                          <span>${escapeHtml(u.mobile || "—")}</span>
                        </div>
                      </div>
                      <div class="auc-badges">
                        <span class="role-pill ${roleClass}">${roleLabel}</span>
                        <span class="badge ${u.status === "active" ? "badge-green" : "badge-red"}">${u.status === "active" ? "فعال" : "مسدود"}</span>
                      </div>
                    </div>
                    <p class="auc-perms">${escapeHtml(permsText)}</p>
                    <div class="auc-actions">
                      ${
                        canManage && u.role !== "owner"
                          ? `
                        ${u.role === "admin" || u.role === "user" ? `<button class="btn btn-sm btn-outline" onclick="openPermModal(${u.id})">دسترسی‌ها</button>` : ""}
                        <button class="btn btn-sm btn-secondary" onclick="toggleUser(${u.id})">${u.status === "active" ? "مسدود کردن" : "رفع مسدودی"}</button>
                        ${u.role === "user" ? `<button class="btn btn-sm btn-primary" onclick="promoteToAdmin(${u.id})">ارتقا به مدیر</button>` : ""}
                        ${u.role === "admin" && isOwner() ? `<button class="btn btn-sm btn-muted" onclick="demoteAdmin(${u.id})">تبدیل به کاربر</button>` : ""}
                      `
                          : u.role === "owner"
                            ? `<span class="auc-owner-note">حساب اصلی سیستم</span>`
                            : ""
                      }
                    </div>
                  </div>
                </article>`;
                    })
                    .join("")
                : `<div class="admin-empty">کاربری یافت نشد</div>`
            }
          </div>
          <div class="modal-overlay" id="permModal">
            <div class="modal">
              <div class="modal-header">
                <h3>تنظیم دسترسی‌ها</h3>
                <button class="modal-close" onclick="closeModal('permModal')">×</button>
              </div>
              <div class="modal-body" id="permModalBody"></div>
              <div class="modal-footer">
                <button class="btn btn-outline" onclick="closeModal('permModal')">انصراف</button>
                <button class="btn btn-primary" onclick="savePermissions()">ذخیره دسترسی‌ها</button>
              </div>
            </div>
          </div>`;
      }

      window.filterAdminUsers = function (val) {
        window._adminUserQuery = val || "";
        const el = document.getElementById("adminContent");
        if (el) renderAdminUsers(el);
        const input = document.getElementById("adminUserSearch");
        if (input) {
          input.focus();
          try {
            const len = input.value.length;
            input.setSelectionRange(len, len);
          } catch (e) {}
        }
      };

      window.openPermModal = function (id) {
        if (!isOwner() && !hasPermission("users")) {
          showToast("دسترسی ندارید", "error");
          return;
        }
        const u = DB.users.find((x) => x.id === id);
        if (!u || u.role === "owner") return;
        window.editingPermUserId = id;
        const current = new Set(u.permissions || []);
        document.getElementById("permModalBody").innerHTML = `
          <p style="margin-bottom:12px;">کاربر: <strong>${escapeHtml(u.name)}</strong> (${escapeHtml(u.email)})</p>
          <div class="perm-grid">
            ${ALL_PERMISSIONS.map(
              (p) => `
              <label class="perm-item">
                <input type="checkbox" data-perm="${p.key}" ${current.has(p.key) ? "checked" : ""} />
                <span>${p.label}</span>
              </label>`,
            ).join("")}
          </div>
          <p style="margin-top:12px;font-size:0.85rem;color:var(--text-muted);">اگر نقش کاربر «کاربر» باشد، با ذخیره به «مدیر» ارتقا می‌یابد.</p>`;
        openModalById("permModal");
      };

      window.savePermissions = function () {
        const id = window.editingPermUserId;
        const u = DB.users.find((x) => x.id === id);
        if (!u) return;
        const perms = [
          ...document.querySelectorAll("#permModalBody input[data-perm]:checked"),
        ].map((el) => el.dataset.perm);
        u.permissions = perms;
        if (u.role === "user" && perms.length) u.role = "admin";
        if (u.role === "admin" && perms.length === 0) {
          // keep as admin with no section access
        }
        // sync currentUser if editing self
        if (DB.currentUser && DB.currentUser.id === u.id) {
          DB.currentUser.permissions = perms;
          DB.currentUser.role = u.role;
        }
        saveDB(DB);
        closeModal("permModal");
        logActivity("تغییر دسترسی کاربر", u.email);
        showToast("دسترسی‌ها ذخیره شد");
        renderAdminSection("users");
      };

      window.promoteToAdmin = function (id) {
        if (!isOwner()) {
          showToast("فقط مالک می‌تواند ارتقا دهد", "error");
          return;
        }
        const u = DB.users.find((x) => x.id === id);
        if (!u) return;
        u.role = "admin";
        u.permissions = u.permissions && u.permissions.length
          ? u.permissions
          : ["dashboard", "products", "tickets"];
        saveDB(DB);
        logActivity("ارتقا به مدیر", u.email);
        showToast("کاربر به مدیر ارتقا یافت");
        renderAdminSection("users");
      };

      window.demoteAdmin = function (id) {
        if (!isOwner()) return;
        const u = DB.users.find((x) => x.id === id);
        if (!u || u.role === "owner") return;
        u.role = "user";
        u.permissions = [];
        saveDB(DB);
        logActivity("تنزل نقش مدیر", u.email);
        showToast("به کاربر عادی تبدیل شد");
        renderAdminSection("users");
      };


      function renderAdminPages(el) {
        el.innerHTML = `
          <div class="admin-header">
            <h1>محتوای صفحات سایت</h1>
            <button class="btn btn-primary" onclick="openPagesEditor()">✏️ ویرایش همه صفحات</button>
          </div>
          <p style="color:var(--text-muted);margin-bottom:20px;line-height:1.8;">
            از این بخش می‌توانید تمام متن‌های صفحه اصلی، درباره ما، محصولات، مزایا، مشاوره، پشتیبانی، تماس و فوتر را ویرایش کنید.
            همچنین <strong>محصول ویژه</strong> صفحه اصلی و <strong>تصویر درباره ما</strong> را انتخاب کنید.
            ویرایش صفحات فقط از پنل مدیریت امکان‌پذیر است (نه از باکس سریع).
          </p>
          <div class="dashboard-cards">
            <div class="dash-card"><div class="label">محصول ویژه فعلی</div><div class="value" style="font-size:1rem;">${escapeHtml((DB.products.find(p=>p.id==DB.settings.heroFeaturedProductId)||{}).name || "—")}</div></div>
            <div class="dash-card"><div class="label">تصویر درباره ما</div><div class="value" style="font-size:1rem;">${DB.settings.aboutImage ? "✓ تنظیم شده" : "بدون تصویر"}</div></div>
            <div class="dash-card"><div class="label">نام سایت</div><div class="value" style="font-size:1rem;">${escapeHtml(DB.settings.companyName)}</div></div>
          </div>
          <div class="form-card" style="max-width:640px;">
            <h3 style="margin-bottom:12px;">کارت محصول ویژه (صفحه اصلی)</h3>
            <div class="form-group">
              <label>محصول مرتبط (اختیاری — برای لینک و متن پیش‌فرض)</label>
              <select id="adminQuickFeatured" onchange="quickSetFeatured(this.value)">
                ${DB.products.filter(p=>p.status==='active').map(p=>`<option value="${p.id}" ${DB.settings.heroFeaturedProductId==p.id?'selected':''}>${escapeHtml(p.name)}</option>`).join('')}
              </select>
            </div>
            <div class="form-group">
              <label>عکس اختصاصی کارت ویژه *</label>
              <p style="font-size:0.85rem;color:var(--text-muted);margin-bottom:8px;">این عکس روی کارت سمت چپ صفحه اصلی نمایش داده می‌شود. اگر خالی باشد از عکس محصول استفاده می‌شود.</p>
              <input type="file" id="adminFeaturedImg" accept="image/*" onchange="quickSetFeaturedImage(this)" />
              ${DB.settings.heroFeaturedImage ? `<div style="margin-top:10px;"><img src="${DB.settings.heroFeaturedImage}" style="max-width:220px;border-radius:12px;"/><br><button type="button" class="btn btn-sm btn-outline" style="margin-top:8px;" onclick="clearFeaturedImage()">حذف عکس اختصاصی</button></div>` : '<p style="font-size:0.85rem;color:var(--text-muted);margin-top:8px;">هنوز عکس اختصاصی نیست</p>'}
            </div>
            <div class="form-group">
              <label>آپلود تصویر درباره ما</label>
              <input type="file" id="adminAboutImg" accept="image/*" onchange="quickSetAboutImage(this)" />
              ${DB.settings.aboutImage ? `<img src="${DB.settings.aboutImage}" style="max-width:200px;margin-top:10px;border-radius:12px;" />` : ""}
            </div>
          </div>
        `;
      }

      window.quickSetFeatured = function (id) {
        DB.settings.heroFeaturedProductId = parseInt(id, 10);
        saveDB(DB);
        showToast("محصول ویژه به‌روز شد");
        logActivity("تغییر محصول ویژه", id);
      };

      window.quickSetAboutImage = async function (input) {
        const f = input.files && input.files[0];
        if (!f) return;
        if (f.size > 2.5 * 1024 * 1024) {
          showToast("حجم تصویر زیاد است", "error");
          return;
        }
        DB.settings.aboutImage = await readFileAsDataURL(f);
        saveDB(DB);
        showToast("تصویر درباره ما ذخیره شد");
        renderAdminSection("pages");
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
                <div class="form-group"><label>محصول ویژه صفحه اصلی</label>
                  <select id="sHeroFeatured">
                    ${DB.products.filter(p=>p.status==="active").map(p=>`<option value="${p.id}" ${s.heroFeaturedProductId==p.id?"selected":""}>${escapeHtml(p.name)}</option>`).join("")}
                  </select>
                  <small style="color:var(--text-muted)">عکس محصول ویژه از گالری همان محصول گرفته می‌شود</small>
                </div>
                <div class="form-group"><label>متن درباره ما</label><textarea id="sAbout">${escapeHtml(s.aboutText)}</textarea></div>
                <div class="form-group"><label>تصویر درباره ما</label>
                  <input type="file" id="sAboutImage" accept="image/*" />
                  ${s.aboutImage?`<div style="margin-top:8px;"><img src="${s.aboutImage}" style="max-width:180px;border-radius:12px;"/><br><button type="button" class="btn btn-sm btn-outline" onclick="DB.settings.aboutImage='';document.getElementById('sAboutImage').value='';">حذف تصویر</button></div>`:""}
                </div>
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

      window.saveSettings = async function () {
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
        const featEl = document.getElementById("sHeroFeatured");
        if (featEl) DB.settings.heroFeaturedProductId = parseInt(featEl.value, 10) || null;
        DB.settings.aboutText = document.getElementById("sAbout").value.trim();
        const aboutFile = document.getElementById("sAboutImage");
        if (aboutFile && aboutFile.files && aboutFile.files[0]) {
          // handled async below via flag
          window._pendingAboutImage = aboutFile.files[0];
        }
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
        if (window._pendingAboutImage) {
          const f = window._pendingAboutImage;
          window._pendingAboutImage = null;
          if (f.size > 2.5 * 1024 * 1024) {
            showToast("تصویر درباره ما خیلی بزرگ است", "error");
          } else {
            DB.settings.aboutImage = await readFileAsDataURL(f);
          }
        }
        saveDB(DB);
        updateSiteTexts();
        applySeasonTheme();
        syncQuickSeasonSelect();
        logActivity("تغییر تنظیمات سایت");
        showToast("تنظیمات ذخیره شد");
      };

      function renderAdminActivity(el) {
        const logs = DB.activityLog || [];
        el.innerHTML = `
          <div class="admin-header"><h1>گزارش فعالیت‌ها</h1></div>
          <div class="admin-card-list">
            ${
              logs.length
                ? logs
                    .map(
                      (a) => `
                <article class="admin-activity-card">
                  <div class="aac-icon">📋</div>
                  <div class="aac-body">
                    <div class="aac-top">
                      <strong>${escapeHtml(a.action)}</strong>
                      <small>${escapeHtml(a.time)}</small>
                    </div>
                    <div class="aac-meta">${escapeHtml(a.user || "—")}</div>
                    <p class="aac-detail">${escapeHtml(a.detail || "")}</p>
                  </div>
                </article>`,
                    )
                    .join("")
                : `<div class="admin-empty">فعالیتی ثبت نشده</div>`
            }
          </div>`;
      }

      window.logout = function () {
        DB.currentUser = null;
        saveDB(DB);
        inlineEditActive = false;
        clearInlineEditableElements();
        hideQuickAdminBar();
        updateAuthUI();
        showToast("خروج انجام شد");
        navigate("home");
      };
