# Что это и для чего

После прочтения ознакомления со статьями и видео двух крутых разработчиков, мне показалось, что я все понял про
мемоизацию и оптимизацию при работе со сложными компонентами в реакте. Но это только показалось, пары моментов, когда
оптимизация не принесла желаемого результата, я решил создать маленькую песочницу, чтобы в разных вариантах потрогать
руками работу с перфомансом на уровне компонент Все ссылки на статьи и видел упомянутые тут будут продублированны в
компонентах, в конкретных случаях.  
[Alex Sidorenko](https://alexsidorenko.com/) --
[Twitter](https://twitter.com/asidorenko_) - крутые статьи  
[АйТи Синяк он же Александр Бальцевич](https://www.youtube.com/channel/UClgj-KWiNaOo9H1rz1ISO6Q)
-- [Twitter](https://twitter.com/it_sin9k) - крутые статьи и видео

## Структура проекта

Проект состоит из 4 основных частей

1) HiLoadExample - общий пример как работать с мемо и как можно сделать то же самое, но без него
2) ExampleWithMemoization - более глубокие кейсы с мемо, работа со списками, применение useCallback,useMemo, внешние
   данные,депенденси лист
3) WithProvider - продолжение работы с мемо при работе с React.Provider
4) AttachToDom - простые действия, как облегчить работу реакту при вариантивнов рендеринге

Для понимания когда происходит рендер нужно установить
расшение [ReactDevTools - Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
или
[ReactDevTools - Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)
В настройках включаем Highlight updates when components render. - если не можем
найти [идем сюда](https://www.digitalocean.com/community/tutorials/how-to-debug-react-components-using-react-developer-tools)
и ищем по поиску `Then select the option under General that says Highlight updates when components render.`

### Ссылки на статьи по примерам

1) HiLoadExample:  
   [Статья Дена Абрамова](https://overreacted.io/before-you-memo/)  
   [Видео Синяка на статью Дена](https://www.youtube.com/watch?v=JzBEbo4enQY&t=178s)
2) ExampleWithMemoization:  
   [Статья Alex Sidorenko Ch.1](https://alexsidorenko.com/blog/react-render-always-rerenders/)  
   [Статья Alex Sidorenko Ch.2](https://alexsidorenko.com/blog/react-render-props/)  
   [Статья Alex Sidorenko Ch.3](https://alexsidorenko.com/blog/react-render-usememo/)  
   [Статья Alex Sidorenko Ch.4](https://alexsidorenko.com/blog/react-render-usecallback/)  
   [Статья Синяка](https://habr.com/ru/post/529950/)  
   [Видео Синяка про useCallback](https://www.youtube.com/watch?v=2Wp7QPTkpms)
   [Видео Синяка про key](https://www.youtube.com/watch?v=OtAlPwW8DNU&t=296s)
3) WithProvider:  
   [Статья Alex Sidorenko Ch.5](https://alexsidorenko.com/blog/react-render-context/)
4) AttachToDom:    
   Без видео статья будет не совсем понятна  
   [Видео Синяка](https://www.youtube.com/watch?v=A0W2n2azH5s)  
   [Статья Alex Sidorenko Ch.6](https://alexsidorenko.com/blog/react-render-dom/)

Ну и не менее важная статья
от [Kent C. Dodds](https://kentcdodds.com/blog/fix-the-slow-render-before-you-fix-the-re-render)
