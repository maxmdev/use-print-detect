# What is usePrintDetect for?
React hook determines if page is being printed that allows you to control output of components in your React or NextJS application.

Written with TypeScript, and can be used in React 16.8 or newer application.

## Common usage scenario
Basic idea is to remove unnecessary components from printed documents:
- Advertising blocks;
- User sensitive info;
- ...etc.

## Usage example

`npm install use-print-detect`

And then use in your React components:

```
import React from 'react';

import usePrintDetect from 'use-print-detect';

const ContentContainer: React.FC = () => {
const isPrint = usePrintDetect();

return (
    <div>
        {isPrint ? 'is printing' : 'usual content'}
    </div>
  )
}
```

## Resources
- [MDN - afterprint](https://developer.mozilla.org/en-US/docs/Web/API/Window/afterprint_event)
- [MDN - beforeprint](https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeprint_event)