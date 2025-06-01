# For Georgian Scroll Down⬇️

# 🎠 Horizontal Scroll Gallery | V4

A bold evolution of horizontal scrolling design. **Version 4** transforms the previous version’s minimalist charm into a fully featured, visually immersive gallery. With smoother scroll behavior, custom UI elements, upgraded JavaScript architecture, and fine-tuned responsiveness — this version is no longer just a gallery. It’s an experience.

Still lightweight. Still no external libraries.  
Just pure HTML, CSS, and modular, vanilla JavaScript.

---

## 🔧 Improvements from V3

- 🎯 **Navigation Arrows Added** — No more guessing where to scroll next. V4 introduces left/right navigation buttons for manual control, complementing mouse/touch scroll.
- 🧠 **Smarter JavaScript** — Script has been split out into a clean `app.js` file. The logic is modular, easier to read, and much more maintainable.
- 💻 **More Responsive Layout** — Grid and flex tweaks improve how the gallery behaves across ultra-wide and smaller screen sizes.
- 🖌️ **Visual Refresh** — New background gradient, spacing, and subtle animations bring a more professional look and smoother feel.
- 🧼 **Cleaner Codebase** — Reorganized folders, comments, and consistent naming. Ready to scale or collaborate on.
- 🎮 **Improved Scroll Interaction** — Refined scroll-to-horizontal behavior with better support across input types (wheel, touch, buttons).

---

## 🎯 Purpose

V4 pushes the concept of a horizontal image gallery into a more production-ready, interactive territory. It’s perfect for:

- Developer/design portfolios  
- Product showcases  
- Horizontal landing pages  
- Interactive presentations or timelines  

Whether you're looking for a lightweight scroll effect or a starting point for a high-impact user experience, this version offers a refined and flexible foundation.

---

## 🚀 What It Does

- Scrolls a container of images **horizontally**
- Features smooth scroll and transition effects
- Responsive layout that adapts across devices
- Visually enhanced layout with padding, spacing, and gradients

---

## 🧠 How It Works

- Gallery container is a `display: flex` row with `overflow-x: scroll`
- JavaScript listens for `wheel` events and scrolls on the X-axis
- Navigation buttons manually control scroll position
- Smooth scrolling enabled via CSS (`scroll-behavior: smooth`)
- Fully responsive using flex wrapping, percentage widths, and media queries

---

## 🖼️ Design Notes

V4 makes it feel *complete*. Not just functional, but stylish and user-friendly.

Design improvements include:
- 💫 **Linear background gradients** for subtle depth
- 📐 **Spacing and margins** for breathing room
- 🔘 **Custom arrow buttons** for better navigation
- 🌓 Designed primarily for **light mode**, but can be tweaked for dark

Things you might want to add next:
- Scroll snapping (`scroll-snap-type`)
- Lazy loading for images
- Hover/active effects on gallery items
- Captions or image overlays
- Animation triggers with `IntersectionObserver`

--- 

## ⚙️ Setup & Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/masterjaneza/Horizontal-Scroll-Gallery---V4
   cd the-world-of-movies
   npm install
   npm run dev
   ```

--- 


---



## 🧪 Browser Support

Fully compatible with modern browsers:

- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Arc
- ✅ Brave

> ⚠️ Older browsers may not support `scroll-behavior: smooth` or modern CSS variables.


---

## 📌 Known Limitations

- No scroll snapping yet (but it’s easy to add).
- Scrollbar is visible by default — can be styled or hidden.
- No built-in accessibility for keyboard navigation (yet).

---


---

## 🧪 License

This project is open source — use it, fork it, tweak it, remix it.  
Just give credit where it’s due. ✌️

---

## 🌟 Support the Project

If you like this or find it useful, give it a ⭐ star on GitHub.  
Fork it, extend it, tag me — let’s inspire each other to scroll sideways in style.

---

## ✍️ Credits

Designed & developed by  
**Davit Janezashvili**  
_aka MasterJaneza – Creative Developer & Designer_

---

## ⚠️ Note

📱 For best visuals, use in light mode.  
Some gradients or shadows may appear dull in dark mode.

---
---
---
--- 



# 🎠 ჰორიზონტალური სქროლის გალერეა | ვერსია 4

ჰორიზონტალური სქროლის დიზაინის თამამი ევოლუცია. **ვერსია 4** აქცევს წინა ვერსიის მინიმალისტურ ხიბლს სრულფასოვან, ვიზუალურად შთამბეჭდავ გამოცდილებად. გაუმჯობესებულია სქროლის ქცევა, დაემატა მომხმარებლისთვის შექმნილი ინტერფეისის ელემენტები, დაიხვეწა JavaScript არქიტექტურა და მნიშვნელოვნად დაიხვეწა რეაგირებადობა.

მაინც მსუბუქი. მაინც ბიბლიოთეკების გარეშე.  
უბრალოდ HTML, CSS და მოდულური Vanilla JavaScript.

---

## 🔧 გაუმჯობესებები V3-თან შედარებით

- 🎯 **ნავიგაციის ღილაკები** — აღარ დაგჭირდებათ გამოცნობა, საით უნდა გადაახვიოთ. V4 გთავაზობთ მარცხენა/მარჯვენა ღილაკებს, რაც მნიშვნელოვნად აუმჯობესებს კონტროლს.
- 🧠 **გონივრული JavaScript სტრუქტურა** — სკრიპტი გამოტანილია სუფთა `app.js` ფაილში. კოდი მოდულურად აგებულია, მარტივად წასაკითხი და შენახვადი.
- 💻 **უფრო რეაგირებადი ლეიაუტი** — grid და flex დახვეწები, რაც უკეთესად ერგება როგორც სუპერ ფართე, ისე მობილურ ეკრანებს.
- 🖌️ **ვიზუალური განახლება** — ახალი ფონის გრადიენტები, სივრცეები და ანიმაციები დიზაინს აძლევს პროფესიონალურ იერსახეს.
- 🧼 **უფრო სუფთა კოდის ბაზა** — ფაილების ორგანიზებული სტრუქტურა, კომენტარები და თანმიმდევრული დასახელებები — მზად არის მასშტაბირებისა და გუნდური მუშაობისთვის.
- 🎮 **გაუმჯობესებული სქროლის ქცევა** — დახვეწილი scroll-to-horizontal ქცევა, რომელიც მუშაობს სხვადასხვა შეყვანის ტიპებზე: ბორბალი, შეხება, ღილაკები.

---

## 🎯 მიზანი

V4 ავითარებს ჰორიზონტალური გალერეის კონცეფციას და აქცევს მას პროდუქციისთვის მზადყოფნაში მყოფ, ინტერაქტიულ პლატფორმად. იდეალურია:

- დეველოპერის ან დიზაინერის პორტფოლიოსთვის  
- პროდუქტის ვიტრინისთვის  
- ჰორიზონტალური ლენდინგ გვერდებისთვის  
- ინტერაქტიული პრეზენტაციებისთვის ან დროის ხაზებისთვის  

თუ გჭირდებათ მსუბუქი სქროლის ეფექტი ან საწყისი წერტილი მაღალი ეფექტურობის UI-სთვის — ეს ვერსია იძლევა სტაბილურ, დახვეწილ და მოქნილ საფუძველს.

---

## 🚀 ფუნქციონალი

- გალერეის კონტეინერი სქროლდება **ჰორიზონტალურად**
- გააჩნია გლუვი სქროლის და ტრანზიციის ეფექტები
- რეაგირებადი ლეიაუტი, რომელიც ერგება ყველა მოწყობილობას
- ვიზუალურად გაუმჯობესებული ელემენტები — padding, spacing და gradients

---

## 🧠 როგორ მუშაობს

- გალერეის კონტეინერი — `display: flex` რიგი `overflow-x: scroll`-ით
- JavaScript უსმენს `wheel` მოვლენებს და ახორციელებს ჰორიზონტალურ სქროლს
- ნავიგაციის ღილაკები სქროლის პოზიციას ცვლის ხელით
- გლუვი სქროლი ჩართულია CSS-ით (`scroll-behavior: smooth`)
- სრულად რეაგირებადი — გამოიყენება პროცენტული სიგანეები, მედია კითხვის პირობები და flex wrapping

---

## 🖼️ დიზაინის შენიშვნები

V4-ს სძენს დასრულებულობის შეგრძნება. არა მხოლოდ ფუნქციური, არამედ სტილური და მოსახერხებელი.

დიზაინის გაუმჯობესებები:

- 💫 **ლინეარული გრადიენტები** ფონზე — ღრმა და დახვეწილი ვიზუალი
- 📐 **სივრცეები და მარგინები** უკეთესი ჰარმონიისთვის
- 🔘 **მორგებული ღილაკები** ნავიგაციისთვის
- 🌓 დიზაინი გათვლილია **ღია რეჟიმზე**, მაგრამ ადვილად დაიხვეწება მუქისთვისაც

შემდეგი ნაბიჯები შეიძლება იყოს:

- Scroll snapping (`scroll-snap-type`)
- სურათების ზარმაცი ჩატვირთვა (lazy loading)
- ჰოვერის/აქტიური მდგომარეობის ეფექტები
- სურათებზე ტექსტური გადაფარვა ან ტიტრები
- ანიმაციები `IntersectionObserver`-ით

---

## 🧪 ბრაუზერის მხარდაჭერა

მთლიანად თავსებადია ყველა თანამედროვე ბრაუზერთან:

- ✅ Chrome  
- ✅ Firefox  
- ✅ Safari  
- ✅ Edge  
- ✅ Arc  
- ✅ Brave  

> ⚠️ ძველ ბრაუზერებში შესაძლოა არ იმუშაოს `scroll-behavior: smooth` ან თანამედროვე CSS ცვლადები.

---

## 📌 ცნობილი შეზღუდვები

- Scroll snapping ჯერ არ არის ინტეგრირებული (მარტივად დასამატებელია)
- Scrollbar ნაგულისხმევად ხილულია — შესაძლებელია სტილიზაცია ან დამალვა
- კლავიატურით ნავიგაცია ჯერ არ არის მხარდაჭერილი

---

## 🧪 ლიცენზია

პროექტი ღია კოდითაა — გამოიყენეთ, fork-ით, შეცვალეთ, გადააკეთეთ.  
უბრალოდ მიუთითეთ ავტორი, როგორც საჭიროა. ✌️

---

## 🌟 მხარი დაუჭირეთ პროექტს

თუ მოგეწონათ ან გამოგადგათ, დააჭირეთ ⭐ GitHub-ზე.  
გააფართოეთ, შეცვალეთ, დაგვათეგეთ — ერთად ვქმნით ჰორიზონტალური სკროლის მაგიას!

---

## ✍️ ავტორი

დიზაინის და პროექტის შემქნელი:  
**დავით ჯანეზაშვილი**  
_aka MasterJaneza – კრეატიული დეველოპერი და დიზაინერი_

---

## ⚠️ შენიშვნა

📱 საუკეთესო ვიზუალური ეფექტებისთვის გამოიყენეთ ღია რეჟიმი.  
ზოგიერთი გრადიენტი ან ჩრდილი შესაძლოა ნაკლებად ეფექტურად გამოჩნდეს მუქ რეჟიმში.

---
