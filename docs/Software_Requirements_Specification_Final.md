# Overview
<p>
  This document is a list of project requirements and expectations. As we progress through the project (and have already progressed through it), these requirements will describe our path forward until we reach our minimum viable product and further. Together these requirements will detail some of the major details that will appear for the project as it is developed and as it finds its conclusion.
</p>

## Functional Requirements
### User Login
| ID | Requirement |
| :-------------: | :----------: |
| FR1 | The user shall be able to create an account |
| FR2 | The user shall be able to input their username |
| FR3 | The user shall be able to input their password |
| FR4 | The user shall be given access to logout capability |
| FR5 | The user shall be given access to rating and reviewing capabilities |

### User Ratings
| ID | Requirement |
| :-------------: | :----------: |
| FR6 | The user shall be able to find a specific bathroom |
| FR7 | The user shall be able to view the average rating for a bathroom |
| FR8 | The user shall be able to create their own rating out of 5 stars |
| FR9 | The user shall be able to submit their own rating |
| FR10 | The user's submitted rating should alter the average rating |

### User Reviews
| ID | Requirement |
| :-------------: | :----------: |
| FR6 | The user shall be able to find a specific bathroom |
| FR7 | The user shall be able to view the reviews for a bathroom |
| FR8 | The user shall be able to create their own reviews |
| FR9 | The user shall be able to submit their own reviews |
| FR10 | The user's submitted reviews shall appear in the bathroom's reviews |

## Non-Functional Requirements
### General
| ID | Requirement |
| :-------------: | :----------: |
| FR1 | The system shall be scalable to foster additional bathrooms |
| FR2 | The system shall properly separate reviews based on the bathroom they are for |
| FR3 | The system shall properly present the average ratings for each bathroom |
| FR4 | The system shall (if hosted) be able to handle around a few hundred users at a given time |
| FR5 | The user shall be able to read the rules for leaving a review on the About page |

### Security
| ID | Requirement |
| :-------------: | :----------: |
| FR6 | The system shall use the API key system for login |
| FR7 | The system shall obfuscate user passwords |
| FR8 | The system shall handle user data securely |
| FR9 | The system shall track SQLite server logs |
| FR10 | The system shall store database backups |


### Usability
| ID | Requirement |
| :-------------: | :----------: |
| FR11 | The system shall provide an alert for invalid credentials |
| FR12 | The system shall provide an alert for outdated keys |
| FR13 | The system shall provide an alert for reviews exceeding 255 characters |
| FR14 | The system shall provide an alert for dangerous characters like - " '  ` |
| FR15 | The system shall load each page promptly, specifically within 2 seconds |

# Software Artifacts
  * [Proposal Doc](proposal.md)
  * [High-Level Tasks Doc](High-Level-Tasks.md)
  * [Mid-Semester Presentation](Remedy_Presentation.pdf)
  * [Final Presentation](Team_Remedy_Final_Presentation.pdf)
  * [Initial SRS Doc](software_requirements_specification.md)
  * [Use Case Diagram](../artifacts/use_case_diagram/Use_Case_Diagram-Final.pdf)
  * [Use Case Extended Description](../artifacts/use_case_diagram/UCD_Extended_Desc.md)
  * [Jira Board for Progression Tracking](https://remedy-team.atlassian.net/jira/software/projects/TR/boards/1?atlOrigin=eyJpIjoiNDk0OGFjZDY2N2E1NGM5MGIwN2YzMDZmYWE5ZjAxMjYiLCJwIjoiaiJ9)
