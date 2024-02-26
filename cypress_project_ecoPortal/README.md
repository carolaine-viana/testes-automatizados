# Practical Challenge for QA Roles at ecoPortal

**Disclaimer**: The website was selected at random allowing the candidate to have freedom and creativity in writing the test scenarios.

**Repository guidelines**: Use https://gitlab.com or https://github.com/ to share your answers. Make your repository private and invite/give edit permissions to carla@ecoportal.co.nz.

## Challenge 1 - Test Planning

**Objectives**: Create a document describing a series of test procedures to be made using this [website](https://www.hoyts.co.nz/) as the subject of the test.

### Scope

- The tests must cover only the main page.
- You must include on your validations potential common uses from the perspective of the user. This isn't intended to be exhaustive, it's to give us a better idea from your work.
- Make sure to provide a failure scenario, whether it's where the test fails or you force something on the site to fail.
- Please provide at least two scenarios from the mobile version.
- The scenarios and tests cases must be delivered inside the folder `1-planning` that you will deliver at the end of the challenges to us.
- The file format can be PDF or .feature
- You must deliver this file either using [Gherkin language](https://cucumber.io/docs/gherkin/reference/) or a similar natural language.
- The way you organize and present the scenarios will be evaluated.
- If you use a spreadsheet, export it to PDF, and you'll need to use the following columns to make our assessment easier:
	- Scenario
	- Procedures of test
	- Test Data
	- Expected Results

## Challenge 2 - Test Execution

**Objectives**: Execute the planned tests on the previous challenge, show the findings, create and show possible metrics of execution and results evaluation and specially the defects found or improvements to the features.

### Scope

- Deliver the documents with your findings on the folder `2-execution`
- You must include the execution summary, total passed cases, total failed cases and other information you think are important.
- It's a follow-up of the planned cases, so show the results on the cases you planned on the previous challenge. It's up to you to judge correct cases you made on the planning phase.
- Also, separate from the metrics, you must create a defects log, in a way that is easy for other stakeholders, like developers, other QA people, product managers, etc.
- Try to think and judge the test results you created using the following principles, so you can properly discuss your findings:
	- Are they really related to the test subject or the main user flow inside a main page news website?
	- Think about the priority. Is it a blocker, that stops the usage? Or it's something that can be fixed in a more planned way?

## Challenge 3 - Test Automation (QA Engineering Position)

**Objectives**: Automate one of the scenarios you created for the cinema website.

### Scope

- Make sure to select a medium-level test scenario
- Use the framework of your preference to automate the website, here, internally we use Rspec and Cypress, but feel free to show one you are comfortable with.
	- We are more interested in the concepts you know than the specific tool you used for this challenge.
	- If you decide to automate a mobile scenario use Flutter.
- You can automate as much scenarios as you want, but make sure all of them works.
- Deliver the files on another folder called `3-automation`
- Create on the same folder a `README.md` with instructions to execute your tests.
- Remember that not everyone have the same environment as you, so try to detail the libraries, applications and commands one might need to fully execute your tests. Consider that your automation is being run on a "clean" computer.
