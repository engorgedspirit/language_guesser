# language_guesser
Language guesser using npm modules

## Used packages
I have used franc package in this to get 3 letter language code from give sentence.
Pass sentence of any language as argument in this program.
As there was a clash with franc (needs to be imported to project) and langs package (which uses require syntax to add to the project),
I downloaded all the language codes from official sources and converted them to JSON format, which code parses through and finds appropriate match.

##Setup info:

### Installation
1. Clone the repository:
   ```shell
   git clone https://github.com/your-username/your-project.git
   ```

2. Navigate to the project directory:

   ```shell
   cd your-project
   ```

3. Install dependencies:

   ```shell
   npm install
   ```

### Usage

1. Start the development server:

   ```shell
   nodemon start.js
   ```

2. Open your web browser and visit [http://localhost:3232](http://localhost:3232) to view the site.

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

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the project.
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

Mention any resources or individuals that inspired or helped you during the development of this project.

---

Feel free to customize this template to fit the specific details of your project.

