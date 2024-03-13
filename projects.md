---
layout: post
title: Projects
---
## Machine Learning/Deep Learning
### Speech-to-Speech Voice Cloning
---
<hr style="border: 7px red">
**Purpose**
- For those who have lost the ability to speak,
generate speech in their own voice using
archived audio clips.

- Clone celebrity voices for brand expansion
and engagement.
  
**Technique/Model/Metrics**



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

### Voting Difficulty in the 2020 US Elections
**Purpose**
- Did Democratic voters or Republican voters report experiencing more difficulty voting in the 2020 election?


**Statistical Test/Technology**
  - Wilcoxon Rank-Sum Test
  - R Programming

**Hypothesis Data and Results Extracts** 


<ins>**Hypothesis**</ins>
- The null hypothesis was that Democrats and Republicans reported an equal amount of difficulty in voting in
the 2020 election. Stated more formally, if we think about level of difficulty for Republicans as the variable X
and difficulty for Democrats as variable Y, then the null hypothesis would be that P(X<Y) = P(X>Y).

<ins>**Data Overview**</ins>
  - We used data from the American National Election Studies (ANES) Time Series study.
    
<ins>**Results Overview**</ins>
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
