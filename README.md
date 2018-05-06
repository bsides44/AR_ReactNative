# AR_ReactNative

A simple AR app using React Native and and React Native ARKit

Key tutorial:

https://medium.com/@HippoAR/how-to-make-your-own-arkit-app-in-5-minutes-using-react-native-9d7ce109a4c2

https://github.com/react-native-ar/react-native-arkit/blob/master/README.md

Gotchas:

You start by installing react native:

npm install react_native init CoolApp

cd CoolApp

npm install --save react-native-arkit

npm install

npm install react_native link react_native_arkit

This gives you the scaffolding of a basic react native AR app. Follow the instructions here to ge ta basic index page, but note it's talking about index.js, NOT index.ios.js: https://medium.com/@HippoAR/how-to-make-your-own-arkit-app-in-5-minutes-using-react-native-9d7ce109a4c2

Install the latest version of Xcode and open your coolapp.xcodeproj file in xcode. iOS only - If you want to view your app on your device instead of on the inbuilt simulator, connect your device to your computer using your iphone cable. Select CoolApp in the very top left corner, click on it and select your device name. (Device needs an A9 processor or later - so iPhone SE, 6 or later)

To render your app on your device you need to 'sign' all your code with your Apple ID. Then it lets you view your app on the same devices that are registered to your apple id. Go to Xcode > Preferences > Accounts, select Apple ID, put in your apple ID (the same one you use for your device). Go Manage Certificates and issue yourself a new signing certificate as an ios developer.

Handy instructions: https://help.apple.com/xcode/mac/current/#/dev60b6fbbc7

In xcode click on the file navigator icon (looks like a file) in the top far left of the left pane. Click on CoolApp, where it's listed at the very top of the file list. This opens some details in the center pane of the xcode screen. Click on CoolApp in the top left of this pane. It gives you your Project and a list of targets. Under Target click the name of your app. This gives you the settings.

In the General tab go to the signing section and set xcode to handle signing for you automatically. Under Team select your account name.

Manually install PocketSVG as per the instructions here: https://github.com/react-native-ar/react-native-arkit/blob/master/README.md
Add the camera usage to the info.plist file as it says in those instructions. In the string you have to write something like 'CoolApp requires access to your camera'.

If you get an error like 'main.jsbundler can not be found' this helps: https://stackoverflow.com/questions/49505446/main-jsbundle-does-not-exist-this-must-be-a-bug-with-echo-react-native

Otherwise, hit the play button in the top left-hand corner. This should bundle all your files and send them to appear in an unmounted fashion (ie with no app icon) on your phone, so you don't need to use Expo. Keep your device connected to your computer. 

When you click to open your app on your device, you should see a screen with the name of your app, then app should render in a minute. It should ask to use your camera and then in another minute an AR object should appear in the camera, as though in the room in front of you.

I've written this out because debugging took so long. For your own debugging: 

-There's a console in the bottom right corner that records errors. It's relly small by default but you can expand it.

-If builds fail you can click on the red exclamation mark and it takes you to the error pan in the left of the screen.

-If it's a problem at your device's end you can go command+shift+2, which shows you your devices and simulators. you device has its own console that you can view

