Pod::Spec.new do |s|
  s.name         = "my-firebase-sdk"
  s.version      = "1.0.0"
  s.summary      = "React Native Firebase Messaging SDK"
  s.author       = { "YourName" => "you@example.com" }
  s.license      = { :type => "MIT", :file => "LICENSE" }
  s.platform     = :ios, "11.0"
  s.source       = { :git => "https://your.repo.url.git", :tag => "#{s.version}" }
  s.source_files = "ios/**/*.{h,m}"
  s.dependency "React"
  s.dependency "Firebase/Core"
  s.dependency "Firebase/Messaging"
end
