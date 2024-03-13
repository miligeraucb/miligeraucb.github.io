---
layout: post
title: Projects
---
## Machine Learning/Deep Learning
<img align="left" src="assets/images/banners/mike.jpg"/>  
<br clear="left"/>  

### Speech-to-Speech Voice Cloning  
*Team: Mili Gera, Tian Zhu, YuCheng Liu*  

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

### Hate Speech Detection
**Purpose**
- To do this
  
**Technique/Model/Metrics**
- BERT

## Data Engineering/ETL Pipeline

### Climate Change Tweet Extraction
**Purpose**
- To do this
  
**Technique/Model**


## Statistical Analysis


<img align="left" src="assets/images/banners/vote.jpg"/>  
<br clear="left"/>  

### Voting Difficulty in the 2020 US Elections


**<ins>Purpose</ins>**
- Did Democratic voters or Republican voters report experiencing more difficulty voting in the 2020 election?
  









**<ins> Technique(Statistical Test),Technology, Metric or Statistical Measure </ins>**
  - Wilcoxon Rank-Sum Test
  - R Programming
  - p-value, Z-score

**<ins>Hypothesis, Data and Results Extracts</ins>** 


*Hypothesis*
- The null hypothesis was that Democrats and Republicans reported an equal amount of difficulty in voting in
the 2020 election. Stated more formally, if we think about level of difficulty for Republicans as the variable X
and difficulty for Democrats as variable Y, then the null hypothesis would be that P(X<Y) = P(X>Y).

*Data Overview*
  - We used data from the American National Election Studies (ANES) Time Series study.
    
*Results Overview*
  - Our results for the Wilcoxon Rank Sum test showed a p-value of .01578. This value exceeds our threshold of
rejection of the null (which is at 0.05). Therefore, per the p value we can reject the null hypothesis. In other
words, we can say that Republicans and Democrats had a differing level of reported difficulty in voting. Note
that our response variable was in the form of a Likert score (indicating rank ties) and our sample size was
large. Therefore, normal approximation could have been used so we went a step further to examine the
Z-score. Here we only assumed that the sampling distribution of the W statistic obtained from the Wilcoxon
Rank Sum test is normal and not the data itself.
Our Z-Score value of 2.413971 also supported our earlier determination that we can reject the null hypothesis
as it does exceed the rejection value of 1.96 or greater. Next we tested the practical significance of this using
the Spearman method.

## Privacy Blog
