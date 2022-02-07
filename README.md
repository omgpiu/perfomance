# Что это и для чего

Данная песочница была создана по мотивам статей и видео от A.Sidorenko и It-синяк. Тут можно посмотреть как правильно
использовать memo, useMemo,useCallback, а где этого делать не стоит. Какие есть еще пути оптимизации методами
библиотеки, не прибегая к мемоизации.  
[Alex Sidorenko](https://alexsidorenko.com/) --
[Twitter](https://twitter.com/asidorenko_) - крутые статьи  
[АйТи Синяк он же Александр Бальцевич](https://www.youtube.com/channel/UClgj-KWiNaOo9H1rz1ISO6Q)
-- [Twitter](https://twitter.com/it_sin9k) - крутые статьи и видео

## Структура проекта


Проект состоит из 4 основных частей

1) ExpensiveChild - общий пример как работать с мемо и как можно сделать то же самое, но без него.
2) ExampleWithMemoization - более глубокие кейсы с мемо, работа со списками, применение useCallback,useMemo, внешние
   данные,депенденси лист.
3) WithProvider - продолжение работы с мемо при работе с React.Provider.
4) AttachToDom - простые действия, как облегчить работу реакту при вариантивнов рендеринге.

Для понимания когда происходит рендер нужно установить
расшение [ReactDevTools - Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
или
[ReactDevTools - Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)
В настройках включаем Highlight updates when components render. - если не можем
найти [идем сюда](https://www.digitalocean.com/community/tutorials/how-to-debug-react-components-using-react-developer-tools)
и ищем по поиску `Then select the option under General that says Highlight updates when components render.`

### Ссылки на статьи по примерам

1) ExpensiveChild:  
   [Статья Дена Абрамова](https://overreacted.io/before-you-memo/)  
   [Видео Синяка на статью Дена](https://www.youtube.com/watch?v=JzBEbo4enQY&)
2) ExampleWithMemoization:  
   [Статья Alex Sidorenko Ch.1](https://alexsidorenko.com/blog/react-render-always-rerenders/)  
   [Статья Alex Sidorenko Ch.2](https://alexsidorenko.com/blog/react-render-props/)  
   [Статья Alex Sidorenko Ch.3](https://alexsidorenko.com/blog/react-render-usememo/)  
   [Статья Alex Sidorenko Ch.4](https://alexsidorenko.com/blog/react-render-usecallback/)  
   [Статья Синяка](https://habr.com/ru/post/529950/)  
   [Видео Синяка про useCallback](https://www.youtube.com/watch?v=2Wp7QPTkpms)
   [Видео Синяка Блок схема по использованию memo() && Боевые примеры](https://www.youtube.com/watch?v=CMqlMhrMoyY)
   [Видео Синяка про key](https://www.youtube.com/watch?v=OtAlPwW8DNU&t=296s)
4) WithProvider:  
   [Статья Alex Sidorenko Ch.5](https://alexsidorenko.com/blog/react-render-context/)
5) AttachToDom:    
   Без видео статья будет не совсем понятна  
   [Видео Синяка](https://www.youtube.com/watch?v=A0W2n2azH5s)  
   [Статья Alex Sidorenko Ch.6](https://alexsidorenko.com/blog/react-render-dom/)

Ну и не менее важная статья
от [Kent C. Dodds](https://kentcdodds.com/blog/fix-the-slow-render-before-you-fix-the-re-render)

# ОБЯЗАТЕЛЬНЫ К ПРОСМОТРУ

[Видео Синяка #1 Все ли вы знаете о React key?](https://www.youtube.com/watch?v=OtAlPwW8DNU)  
[Видео Синяка #2 про о React Reconciliation](https://www.youtube.com/watch?v=NPXJnKytER4)  
[Видео Синяка #3 Какая настоящая цена useMemo?](https://www.youtube.com/watch?v=i6DPqqbdIyw)  
[Видео Синяка #4 useMemo - исходники, альтернативное использование](https://www.youtube.com/watch?v=V426Pl3X6qQ)  
[Видео Синяка #5 React.memo это вам не useMemo](https://www.youtube.com/watch?v=Hm769uj6WPo)  
[Видео Синяка #6 Чем отличается SimpleMemoComponent от MemoComponent?](https://www.youtube.com/watch?v=LhZ4Xk5CZU8)    
[Видео Синяка #7 Станет ли memo() дэфолтным поведением реакт компонента?](https://www.youtube.com/watch?v=uEeZ2TUkOCE)  
[Статья расшифровка видео #1](https://habr.com/ru/post/527596/)  
[Статья расшифровка видео #3](https://habr.com/ru/post/544930/)  
[Статья расшифровка видео #5 и #6](https://habr.com/ru/post/551804/)  
  
