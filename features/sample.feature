Feature: To sanity check

  Scenario: Should be able to visit website
    Given I am on "/"
    Then I should be on "https://alice-0-kim.github.io"

  Scenario: Should be able to see heading
    Given I am on "/"
    Then I should see a "p" element
