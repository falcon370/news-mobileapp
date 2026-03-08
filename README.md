# News Mobile App

A simple cross-platform mobile application built with Flutter that displays a news feed from a configurable URL.

## Prerequisites
- [Flutter SDK](https://flutter.dev/docs/get-started/install) installed.
- Android Studio / Xcode for emulators.

## Setup Instructions

1.  **Initialize the Project**
    Since this is a new project structure, run the following command to generate the Android and iOS platform folders:
    ```bash
    flutter create .
    ```

2.  **Install Dependencies**
    Get the required packages (specifically `webview_flutter`):
    ```bash
    flutter pub get
    ```

3.  **Android Configuration (Important)**
    Open `android/app/build.gradle` and change the `minSdkVersion` to at least 19 (required by `webview_flutter`):
    ```gradle
    defaultConfig {
        // ...
        minSdkVersion 19
        // ...
    }
    ```

4.  **iOS Configuration**
    Open `ios/Runner/Info.plist` and add the following key to allow loading HTTP (non-HTTPS) URLs if needed (though HTTPS is recommended):
    ```xml
    <key>NSAppTransportSecurity</key>
    <dict>
        <key>NSAllowsArbitraryLoads</key>
        <true/>
    </dict>
    ```

## Configuration

To change the news feed URL:
1.  Open `lib/config.dart`.
2.  Update the `newsFeedUrl` constant:
    ```dart
    static const String newsFeedUrl = "https://your-news-site.com";
    ```

## Running the App

To run on a connected device or emulator:
```bash
flutter run
```

## Running on a Physical Android Device

To install and test the app on your real Android phone:

1.  **Enable Developer Mode**:
    - Go to **Settings > About Phone**.
    - Tap **Build Number** 7 times until you see "You are now a developer!".

2.  **Enable USB Debugging**:
    - Go to **Settings > System > Developer Options**.
    - Turn on **USB Debugging**.

3.  **Connect Device**:
    - Connect your phone to your laptop via USB cable.
    - Accept the "Allow USB debugging" prompt on your phone screen.

4.  **Verify Connection**:
    Run this command in the terminal to confirm your device is detected:
    ```bash
    flutter devices
    ```

5.  **Run the App**:
    ```bash
    flutter run
    ```
    The app will install and open on your phone.

## Build for Release

When you are ready to distribute your app to users, you need to create a release build.

### Android (APK)
To generate an APK file that can be installed directly on Android devices:

1.  Run the build command:
    ```bash
    flutter build apk --release
    ```
2.  Locate the file:
    The APK will be created at:
    `build/app/outputs/flutter-apk/app-release.apk`

3.  **Distribute**: You can send this file to users, and they can install it (they may need to enable "Install unknown apps").

### Installing on Android (Without Play Store)
Since you are distributing the APK manually (via Email, Google Drive, WhatsApp, etc.):

1.  **Transfer the APK**:
    - **Email/Drive/WhatsApp**: Upload the `app-release.apk` file from your computer to your email or Google Drive. On your Android phone, download the file.
    - **USB**: Connect your phone to your computer. Copy the `app-release.apk` file to your phone's storage (e.g., Downloads folder).

2.  **Enable Unknown Sources**:
    - When you try to open the downloaded APK on your phone, Android will ask for permission to install apps from that source (e.g., Chrome, Drive, or Files app).
    - Toggle "Allow from this source" to ON.

3.  **Install**:
    - Tap **Install**. The app will be installed on your device.

### Android (App Bundle for Play Store)
To generate an App Bundle (`.aab`) for uploading to the Google Play Store:
```bash
flutter build appbundle --release
```
File location: `build/app/outputs/bundle/release/app-release.aab`

### iOS (Requires macOS)
**Note**: Building an iOS app (`.ipa`) requires a Mac computer with Xcode installed. You cannot build the iOS binary directly on Windows.

If you have a Mac:
1.  Run:
    ```bash
    flutter build ios --release
    ```
2.  Open the `ios/Runner.xcworkspace` in Xcode.
3.  Go to **Product > Archive** to create a build for TestFlight or the App Store.

**If you do not have a Mac**, you will need to use a cloud build service (like Codemagic or GitHub Actions) to generate the iOS build.

