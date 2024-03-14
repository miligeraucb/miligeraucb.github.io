---
layout: post
title: Speech-to-Speech Voice Cloning
subtitle: Team members   Mili Gera, Tian Zhu, YuCheng Liu
categories: deeplearning machinelearning
excerpt_image: assets/images/banners/mike.jpg
tags: machinelearning deeplearning 
---


![mike](/assets/images/banners/mike.jpg) 

## Purpose

 



- Generate high-quality voice clones with minimal voice data.
  
- Synthesize a new hybrid model for voice cloning and test performance against an open-source baseline model.
  
- Some use cases include the following: 
   - For those who have lost the ability to speak, generate speech in their own voice using archived audio clips.  
   - Clone celebrity voices for brand expansion and engagement.
  
## Technique (Models), Technology, and Metrics

### Technique

*General Approach* 

![General Approach](/assets/images/banners/voice_tech.jpg) 

*Baseline Models*


![Baseline Models](/assets/images/banners/voice_baseline.jpg) 

*Synthesized Hybrid Model*

![Baseline Models](/assets/images/banners/voice_hybrid.jpg) 

### Technology
- Models used
  - HuBERT
  - TACITRON-2
  - Hi-Fi GAN
  - Combined HuBERT and VITS model (**our team created a new hybrid model**)
- Python
- Amazon Web Services (AWS)
- Amazon SageMaker Studio
- Jupyter Notebook

### Metrics  
- Word Error Rate, Word Information Lost, Mean Opinion Score
  
## Results Extract

- Our newly-created hybrid model performs better than open-source baseline model with less data.
- Our newly-created hybrid model has a higher mean opinion score.

 ![Baseline Models](/assets/images/banners/voice_results.jpg)  

