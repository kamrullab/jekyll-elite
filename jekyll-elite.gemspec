require_relative "lib/jekyll-elite/version"

Gem::Specification.new do |spec|
  spec.name          = "jekyll-elite"
  spec.version       = JekyllElite::VERSION
  spec.authors       = ["KAMRUL HOSSAIN"]
  spec.summary       = "A modern, accessible Jekyll theme."
  spec.homepage      = "https://github.com/kamrullab/jekyll-elite"
  spec.license       = "MIT"

  spec.required_ruby_version = ">= 2.7.0"
  spec.require_paths = ["lib"]

  spec.metadata["homepage_uri"] = spec.homepage
  spec.metadata["source_code_uri"] = spec.homepage
  spec.metadata["bug_tracker_uri"] = "#{spec.homepage}/issues"

  spec.files = Dir[
    "assets/**/*",
    "_data/**/*",
    "_includes/**/*",
    "_layouts/**/*",
    "_sass/**/*",
    "lib/**/*",
    "_config.yml",
    "LICENSE",
    "README.md"
  ]

  spec.add_runtime_dependency "jekyll", ">= 4.3", "< 5.0"
  spec.add_runtime_dependency "jekyll-feed", "~> 0.17"
  spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.8"
  spec.add_runtime_dependency "jekyll-sitemap", "~> 1.4"

  spec.add_development_dependency "rake", "~> 13.2"
end
