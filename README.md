# Mini Product App

แอป React Native แสดงรายการสินค้า รายละเอียด และรายการโปรด

## สิ่งที่ต้องมี

- Node.js >= 22
- สำหรับ Android: JDK, Android Studio, emulator หรือเครื่องจริง
- สำหรับ iOS (macOS เท่านั้น): Xcode, CocoaPods

## ติดตั้ง

```sh
npm install
```

iOS (ครั้งแรก หรือหลังเพิ่ม native dependency):

```sh
cd ios && pod install && cd ..
```

## รันแอป

เปิด Metro (เทอร์มินัลที่ 1):

```sh
npm start
```

รันแอป (เทอร์มินัลที่ 2):

```sh
# Android
npm run android

# iOS
npm run ios
```
