# DevoTeam-FE-test

*This is FE test for DevoTeam.*

[deployed link - live](https://devoteam-fe-test-shan.vercel.app)

- run `yarn` to install all needed packages first
- run `yarn start` to start app
- run `yarn test` to run unit test

Features (mandatory & extra🌟)

1. ✅ Fetch data from api, by default, it will render the list view. Results are sorted by asc by default.
2. ✅ If you click the sort-icon, results will be sorted by desc and the icon will also change to a different one to indicate that.
3. ✅ If you click view-switch-icon, you will toggle between list-view and thumnail-cards-view. Again, the icon will change correspondingly.
4. ✅ If you type anything, search results will update.
5. 🌟 Add clear input button.
6. 🌟 When there is no search result, show some text to let the user know, instead of a blank page.
7. 🌟 When there is an error (when fetching data from api), the user will see an error page with error message there.
8. ✅ Two different layout will be responsive, to implement that, I used both grid and flex.
9. ✅ Follow design, use correct font-family and etc.
10. ✅ Add unit test for all functionality
11. 🌟 Add basic skeleton while loading

Can be improved/discussed:

1. Can store results in sessionStorage when we fetch data for the first time to avoid sending multiple requests when we refresh the page;
2. Can add more hover/fancy effect to desktop version;
3. Title's position on desktop and how it should look like on medium size screen, I made some tiny adjustment.
4. Can add more accessibility later on

Videos:

https://user-images.githubusercontent.com/54848603/198529882-cfa6e3b4-c7bb-4b04-8d7b-4e0b1f5955db.mov

https://user-images.githubusercontent.com/54848603/198530093-ddf65c5a-ea61-41e2-bf48-8a613c318b3f.mov
