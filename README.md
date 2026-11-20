# Frieren website — a beginner-friendly starter

Open `index.html` in your browser. No installation is needed. (Internet helps load Google Fonts; the site still works without them.)

## Three files
- `index.html` contains your paper, citations, and the left-side table of contents.
- `style.css` controls the colors, fonts, hover text-shadows, floating panels and mobile layout.
- `script.js` draws gently twinkling stars behind the panels.

## Small experiments
1. To change a title, edit the text between `<h2>` and `</h2>` in `index.html`.
2. To change the golden glowing words, edit `.toc a:hover` and its `text-shadow` property in `style.css`.
3. To change the paper panels' shadows, edit `.paper-card` and `box-shadow`.
4. To add a table-of-contents link, add `<a href="#new-name">My section</a>` to `<nav>`, then give your section or phrase `id="new-name"`.
5. On mobile, `.toc` changes to `position: static` inside the media query.

## Citation checks
- Textbook: Sections 2.1 (schemata and salience), 2.4 (perception checking, relational insecurity, and unrealistic goals), and 3.4 (Johari window and social comparison).
- Article: Carstensen, Isaacowitz, & Charles (1999), with the direct quote on page 165.
- The anime premiered September 29, 2023. TV series citation credits its executive producers.
- Exact dialogue wording in your chosen subtitle/dub version has not been independently verified. Check the quotations before submitting, because English translations vary.

Sources: https://uen.pressbooks.pub/interpersonalsmallgroupcommunication/front-matter/about/
https://www.ntvhd.co.jp/english/data_cms/pdf/ir/presentation/20231102.pdf
https://doi.org/10.1037/0003-066X.54.3.165
