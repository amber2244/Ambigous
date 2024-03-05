import speech_recognition as sr
from googletrans import Translator
from gtts import gTTS
import os

def audio_to_audio_translation(audio_file_path, source_language='en', target_language='fr'):
    # Step 1: Speech Recognition
    recognizer = sr.Recognizer()
    with sr.AudioFile(audio_file_path) as source:
        audio_data = recognizer.record(source)
        text = recognizer.recognize_google(audio_data, language=source_language)

    print("Source Text:", text)

    # Step 2: Machine Translation
    translator = Translator()
    translated_text = translator.translate(text, src=source_language, dest=target_language).text

    print("Translated Text:", translated_text)

    # Step 3: Text-to-Speech Synthesis
    tts = gTTS(text=translated_text, lang=target_language)
    tts.save("translated_audio.mp3")

    # Step 4: Play the translated audio
    os.system("start translated_audio.mp3")

if __name__ == "__main__":
    audio_file_path = "TechLearnsForEducation\src\krr.mp4"
    audio_to_audio_translation(audio_file_path)
