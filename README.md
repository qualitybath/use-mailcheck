# Use-Mailcheck

React component for the [mailcheck](https://github.com/mailcheck/mailcheck) library. Reduce user-misspelled email addresses in your forms by suggesting a right domain when your users misspell it in an email address.

### Installation

```
yarn add @qb/use-mailcheck
```

### Usage

```jsx
import { useMailCheck } from '@qb/use-mailcheck';

const [inputText, setInputText] = useState(null);
const suggestion = useMailCheck({ email: inputText });

<div>
  <input
    type="email"
    value={inputText}
    onChange={e => {
      setInputText(e.target.value);
    }}
  />
  {suggestion && <div>Did you mean {suggestion.full}?</div>}
</div>;
```

- `suggestion`: The suggestion object passed back to you, or null if mailcheck has nothing to suggest. The suggestion object has the following members:

```js
{
  address: 'test',        // the address; part before the @ sign
  domain: 'gmail.com',    // the suggested domain
  full: 'test@gmail.com'  // the full suggested email
}
```

## Thanks

- https://github.com/eligolding/react-mailcheck
- https://github.com/mailcheck/mailcheck

## License

MIT
