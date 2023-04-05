Feature: WebDriverUniversity - Contact us page

  Scenario: Valid Contact Us Form Submission
    Given I navigate to the webdriveruniversity homepage
    When I click on the contact us button
    And I type a first name
    And I Type a last name
    And I enter an email address
    And I type a comment
    And I click on the submit button 
    Then U should be presented with a successfull contact submission message

  Scenario: Invalid Contact us Fom Submission
    Given I navigate to the webdriveruniversity homepage
    When I click on the contact us button
    And I type a first name
    And I Type a last name
    And I type a comment
    And I click on the submit button 
    Then U should be presented with a unsuccessfull contact submission message