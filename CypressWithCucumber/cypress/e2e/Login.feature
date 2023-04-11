@login @regression
Feature: WebDriverUniversity - Login Page

  Background: Pre conditions
    Given I navigate to the webdriveruniversity login page

  Scenario Outline: Validate valid & invalid login credentials
    And I type a username <username>
    And I type a password <password>
    And I click on the login button
    Then I Should be presented with an alert box wich contains text '<expectAlertText>'

    Examples:
      | username  | password     | expectAlertText      |
      | webdriver | webdriver123 | validation succeeded |
      | webdriver | webdriver12  | validation failed    |

