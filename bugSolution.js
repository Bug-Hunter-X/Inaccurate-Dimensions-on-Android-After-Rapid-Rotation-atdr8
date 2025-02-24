The solution uses `useEffect` to listen for changes in screen dimensions and `LayoutAnimation` to smoothly update the UI. 

```javascript
import React, { useEffect, useState } from 'react';
import { Dimensions, View, Text, LayoutAnimation } from 'react-native';

const { width, height } = Dimensions.get('window');

const MyComponent = () => {
  const [screenDimensions, setScreenDimensions] = useState({ width, height });

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setScreenDimensions({ width: window.width, height: window.height });
    });

    return () => subscription.remove();
  }, []);

  return (
    <View style={{ width: screenDimensions.width / 2, height: screenDimensions.height / 2 }}>
      <Text>This component is now correctly sized</Text>
    </View>
  );
};

export default MyComponent;
```