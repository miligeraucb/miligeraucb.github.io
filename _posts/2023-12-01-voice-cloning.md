---
layout: post
title: Speech-to-Speech Voice Cloning
subtitle: Team members -  Mili Gera, Tian Zhu, YuCheng Liu
categories: deeplearning machinelearning
banner:
  image: assets/images/banners/mike.jpg
  opacity: 0.618
  background: "#000"
  height: "10vh"
  min_height: "10vh"
  heading_style: "font-size: 4.25em; font-weight: bold; text-decoration: underline"
excerpt_image: assets/images/banners/mike.jpg


tags: machinelearning deeplearning 
---
Generate high-quality voice-clones of any target voice.

## Purpose
**<ins>Purpose</ins>**

- Generate high-quality voice clones with minimal voice data.
- For this purpose, synthesize a new hybrid model for voice cloning and test performance against an open-source baseline model.  
- Some use case include the following: 

   - For those who have lost the ability to speak, generate speech in their own voice using archived audio clips.  
   - Clone celebrity voices for brand expansion and engagement.
  
**<ins>Technique (Model), Technology, and Metrics</ins>**  

*Technique*

*Technology*
- Models used
  - HuBERT
  - TACITRON-2
  - Hi-Fi GAN
  - Combined HuBERT and VITS model (**our team created a new hybrid model**)
- Python
- Amazon Web Services (AWS)
- Amazon SageMaker Studio
- Jupyter Notebook

*Metrics*  
- Word Error Rate, Word Information Lost, Mean Opinion Score
  
**<ins>Results Extract</ins>**

- Our newly-created hybrid model performs better than open-source baseline model with less data.
- Our newly-created hybrid model has a higher mean opinion score

