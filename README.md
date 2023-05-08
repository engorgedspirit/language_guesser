# language_guesser
Language guesser using npm modules

## Used packages
I have used franc package in this to get 3 letter language code from give sentence.
Pass sentence of any language as argument in this program.
As there was a clash with franc (needs to be imported to project) and langs package (which uses require syntax to add to the project),
I downloaded all the language codes from official sources and converted them to JSON format, which code parses through and finds appropriate match.
