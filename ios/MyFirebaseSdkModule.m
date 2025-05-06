// MyFirebaseSdkModule.m

#import "MyFirebaseSdkModule.h"
#import <React/RCTLog.h>
#import <Firebase.h>

@implementation MyFirebaseSdkModule

RCT_EXPORT_MODULE();

- (NSArray<NSString *> *)supportedEvents {
  return @[]; // Add event names if using RCTEventEmitter
}

RCT_EXPORT_METHOD(initializeFirebase:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject) {
  if (![FIRApp defaultApp]) {
    [FIRApp configure];
    RCTLogInfo(@"✅ Firebase configured in iOS native module.");
    resolve(@(YES));
  } else {
    RCTLogInfo(@"ℹ️ Firebase already initialized.");
    resolve(@(YES));
  }
}

RCT_EXPORT_METHOD(getFcmToken:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject) {
  FIRMessaging *messaging = [FIRMessaging messaging];
  [messaging tokenWithCompletion:^(NSString * _Nullable token, NSError * _Nullable error) {
    if (error) {
      reject(@"token_error", @"Failed to get FCM token", error);
    } else {
      resolve(token);
    }
  }];
}

@end
