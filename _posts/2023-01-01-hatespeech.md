---
layout: post
title: Hate Speech Detection in Hinglish and Korean Media
subtitle: Team members - Mili Gera, Jared Dec, Devashish Kulkarni
categories: [deep learning, machine learning, nlp, large language model]
excerpt_image: assets/images/banners/hate_speech.jpg
tags: [naturallanguageprocessing, largelanguagemodel, llm, deeplearning, machinelearning]
---

![hatespeech](/assets/images/banners/hate_speech.jpg)  

## Purpose

- There is a need for hate speech detection techniques in languages other than English.
- Compared the applicability of various transformer based language models on two linguistically different languages (as opposed to maximizing a single metric like an F1 score).
- Focused the investigation on Hindi, which is close in both cultural expression and linguistic relation to English, and Korean, which has more subtle hate expression and nolinguistic relation to Western languages. 

## Hypothesis and Data

### Hypothesis

- Due to cultural and linguistic variations (especially the subtleties seen in Korean hate speech), different model architectures may prove to be the “best-fit” models for Hindi and Korean.
- Specifically, seeing that out-of-the-box mBERT does not perform well in mapping multilingual sentences of the same meaning to the same vector space, we wanted to see if it would be advantageous to have cross-lingual sentence embeddings which “map” similar meaning sentences from two different languages. This piqued our interest in LaBSE (Language Agnostic BERT Sentence Embedding) to see whether it would better capture Korean subtleties<sup>[1]</sup>.
- Specifically we hypothesized that Korean may see a bigger boost from the chosen mBERT baseline if a language-agnostic NLP model was used.

### Data

- Labeled twitter data and labeled comments left on online news sources.

## Technique (Models),Technology, and Metrics 

### Technique  

**<ins>*General Approach*</ins>** 
- Since mBERT (or a monolingual representation of mBERT such as KoBERT) is one of the state-of-the-art techniques for both Korean and Hindi hate speech detection, we use mBERT results for both Korean and Hindi as our baseline from which we would conduct further analysis.
- In addition to regular classification tasks such as hyperparameter tuning, we also experimented with zero-shot learning.
   
**<ins>*mBERT Model*</ins>**  

![mbert](/assets/images/banners/mbert.jpg)

**<ins>*LaBSE Model*</ins>**  

### Technology
- Models used
  - LabSE
  - mBERT
  - CNN
- Python
- Keras
- TensorFlow
- Jupyter Notebook
- Google Collab

### Metrics
- F1 Score
- Precision
- Recall

## Results Overview


## References

<sup>1</sup> Yang, Yinfei, and Fangxiaoyu Feng. “Language-Agnostic Bert Sentence Embedding.” Google AI Blog, Google Research, 18 Aug, 2020, https://arxiv.org/pdf/2007.01852.pdf

  



