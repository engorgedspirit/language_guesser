# language_guesser
Language guesser using npm modules

## Used packages
I have used franc package in this to get 3 letter language code from give sentence.
Pass sentence of any language as argument in this program.
As there was a clash with franc (needs to be imported to project) and langs package (which uses require syntax to add to the project),
I downloaded all the language codes from official sources and converted them to JSON format, which code parses through and finds appropriate match.


##Example sentences to test
English: "The sun is shining brightly in the sky."
Spanish: "Me encanta la comida picante."
French: "Je suis en train de lire un livre intéressant."
German: "Ich gehe gerne im Wald spazieren."
Italian: "Mi piace mangiare la pizza con gli amici."
Portuguese: "Eu gosto de ouvir música enquanto cozinho."
Japanese: "今日は友達と映画を見に行きます。"
Russian: "Мой любимый цвет - голубой."
Mandarin Chinese: "我正在学习如何写汉字."
Arabic: "أحب السفر واكتشاف ثقافات جديدة."