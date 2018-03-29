Feature: To sanity check

  Scenario: Should be able to visit website
    Given I am on "/"
    Then I should be on "/"

  Scenario: Should be able to see element with <p> tag
    Given I am on "/"
    Then I should see a "p" element
    
  Scenario: Should be able to see text 'machine learning'
    Given I am on "/"
    Then I should see "machine learning"
