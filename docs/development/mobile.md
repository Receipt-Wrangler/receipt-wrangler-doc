# Mobile

Receipt Wrangler mobile is a Flutter application.  
Below we'll go through on setting it up in a development environment, and how some of the technologies used.

## Prerequisites
* Flutter SDK https://docs.flutter.dev/get-started/install
* Android Studio (For Android development) https://developer.android.com/studio
* XCode (For IOS Development) https://developer.apple.com/xcode/

## Setup
1. Clone the repository https://github.com/Receipt-Wrangler/receipt-wrangler-mobile
2. Open a terminal and navigate to the root of the project
3. Run ```flutter pub get```
4. Run ```flutter run```

## Running the application
The mobile app is intended to be a mobile app only. It is not intended to be run as a web app, or desktop app, so
development will largely take place on simulators or physical devices.

Flutter run will let you run the app on a simulator or physical device that it has recognized.
Developers can use Android Studio or XCode to set up the simulators, and run the app from there, or run from a physical device.

We'll go through a super quick setup for both Android and IOS.

Android:
* Open Android Studio
* Open Device Manager on the right side
* Create or run a device
* Run ```flutter run```, then selected running android device

IOS:
* Open terminal
* Run ```open -a Simulator```
* On the simulator's banner, select file -> Open Simulator and select the device you want to run
* Run ```flutter run```, then selected running IOS device

## Testing
Currently, there are no tests in place for the mobile app. Eventually end to end tests will be implemented,
and some simple unit tests for the business logic.

## Important Technologies Used
* Flutter https://flutter.dev/
* Provider https://pub.dev/packages/provider
* GoRouter https://pub.dev/packages/go_router
* OpenAPI Generated Client https://www.openapis.org/

