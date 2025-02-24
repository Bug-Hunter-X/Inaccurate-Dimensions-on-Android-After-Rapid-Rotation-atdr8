# React Native Dimensions API Inaccuracy on Android

This repository demonstrates a bug in React Native where the `Dimensions` API returns incorrect screen dimensions after rapid screen rotations on Android devices. This can lead to layout issues and mispositioning of components.

## Bug Description

The `Dimensions.get('window')` method, when called after quickly rotating an Android device multiple times, might return stale or incorrect width and height values. This results in components being rendered with unexpected sizes, potentially causing clipping or overlapping.

## Reproduction

1. Clone this repository.
2. Run the app on an Android device or emulator.
3. Rapidly rotate the device multiple times.
4. Observe that the component size might be incorrect, indicating the `Dimensions` API returned inaccurate values.

## Solution

The solution involves using the `Dimensions` API in conjunction with the `useEffect` hook and the `LayoutAnimation` API to ensure the layout is updated correctly after the screen dimensions change.

## Note

This issue is more prominent on Android devices and may not be reproducible on iOS.