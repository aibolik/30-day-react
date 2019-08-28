# Ajax Type Ahead

In this lesson we will continue practicing using hooks and we will focus on `useContext`, especially, how it could be used in real-world app to highlight search term in search results.

## Bolerplate

Some boilerplate code that is prepared

1. `App.js`(with styled-components in `styled.js` ) - skeleton of app. Header like in Hackernews search page and input for search
2. `Suggestions` component - empty component, that is supposed to render in list `SuggestionItems`
3. `SuggestionItem` component - already implemented component, that shows search results with design as in Hackernews. It is the smallest block in our app, and has no functionality other than showing data. We will update it to use `useContext` later.
4. `mockData/data.json` - some mock data with same structure as a result from Hackernews search API.

## Steps

### 1. Render mock data 

Here we need to import `mockData/data.json` and pass it to `Suggestion`. `Suggestion` should render `SuggestionItem` in `map`.

### 2. Make input controlled input

> Note: Components like `input` can be controlled and uncontrolled. Controlled ones' value comes always from `state` and when their value is changed, it is synced with `state`. Uncontrolled components value is not synced to state, rather their value is taken on some action, e.g. on submitting form. To get the value of the `input` references are used(`useRef` if you go with hooks).

We need to use here _controlled input_ since we need to know its value before making request. For this one we can use `useState`.

Let's check if it works in React DevTools.

### 3. Let's `useFetch` to get real search results

We will reuse `useFetch` hook from previous lessons. Let's remind ourselves how it works by looking at it's code. In order to understand, which endpoint we need, let's check out Hackernews search documentation - https://hn.algolia.com/api

So, here is a base URL for search: `http://hn.algolia.com/api/v1/search?query=`

With this, our app will make a fetch request on loading, but afterwards it won't.

Now we can use another hook, that will trigger an action when some variable changes(or _dependency_): `useEffect`.

Now requests are triggered when we are typing something in input field. Let's change our mock data with real data. We need to send `data` from `state` that comes from `useFetch` OR we could just sent whole object to prevent _Cannot read property 'hits' of null_. So we spread `state` to `Suggestions` component.

> With `isLoading`, `error` in `Suggestion` component, you could implement some UI to show appropriate states. But for the sake of simplicity, we will skip it and won't render anything if there are any errors or data is null.

_In browser you can see some posts without title. It looks a bit weird, looks like some special content. Let's just filter them out

### 4. Debounce search results

Looks like we are hitting too much Hackernews API when we type things. Let's debounce requests until we get blocked by them :) 

> If you have troubles distinguishing between `debounce` and `throttle` take a look at [this guide on CSS-tricks](https://css-tricks.com/debouncing-throttling-explained-examples/). Don't worry, even most experiences developers get confused with it, so feel free to bookmark this link whenever you are confused.

Remember how it is easy to compose and reuse `hooks`? Since we already have our custom `useDebounce` hook, let's just reuse that one.

Now we need to make request not when `search` changes, but when `debouncedSearch` - just replace dependency. Note that we still use `search` as value of `input`, since we want immmediate feedback on typing, not debounced input value.

### 5. SearchContext

Now it's time to add highlighting search results. Actually, I noticed that hackernews search API already returns highlighted results. _See network tab_. But it is not always the case, so we should have a way to do it ourselves on client Side. To accomplish this, we will use `Context`. `Context` can be set very highly in a tree and we can grab its value wherever down the tree we want avoiding **prob drilling**. 

1. Create a `SearchContext`
2. Grab the value in `SuggestionItem`
3. Replace a string to include highlight
4. `dangerouslySetInnerHtml`

> help:
> ```
> newString = oldString.replace(new RegExp(term, 'ig'), `<strong>$&</strong>`);
> ```

### Gotchas

If you open network tab and inspect all types of data(chose filter _All_), you will notice that every time you search something there are bunch of requests to Google Fonts. That happens because `App` top level component gets re-rendered, and since it holds `GlobalStyles`, it will re-rerender it too. And `GlobalStyles` imports fonts from Google, that's why you see all that requests. One possible solution to that would be to have `GlobalStyles` somewhere upper than your main logic.