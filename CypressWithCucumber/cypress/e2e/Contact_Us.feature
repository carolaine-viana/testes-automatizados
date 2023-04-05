Feature: WebDriverUniversity - Contact us page

  Scenario: Valid Contact Us Form Submission
    Given I navigate to the webdriveruniversity homepage
    When I click on the contact us button
    And I type a first name
    And I Type a last name
    And I enter an email address
    And I type a comment
    And I click on the submit button 
    Then U should be presented with a successfull contact us submission message

  Scenario: Invalid Contact Us Fom Submission
    Given I navigate to the webdriveruniversity homepage
    When I click on the contact us button
    And I type a first name
    And I Type a last name
    And I type a comment
    And I click on the submit button 
    Then U should be presented with a unsuccessfull contact us submission message

  Scenario: Valid Contact Us Fom Submission - Using Specific Data
    Given I navigate to the webdriveruniversity homepage
    When I click on the contact us button
    And I type a specific first name "Sarah"
    And I type a specific last name "Woods"
    And I type a specific email address "sarah@hotmail.com"
    And I type a specific word "hello 123" and number 6788 within the comment input field
    And I click on the submit button 
    Then U should be presented with a successfull contact us submission message
