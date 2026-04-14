---
title: Recover Lost Tab Contents
---

# Recover Lost Tab Contents

> [!NOTE]
> This method has only been tested on Chromium-based browsers within Windows 10 / 11.

> [!INFO] 
> This post is based on https://www.reddit.com/r/LifeProTips/comments/1hyrnv/lpt_recover_lost_text_youve_typed_in_a_form_on/.

To paraphrase: imagine you were just filling out a important form in the browser, or working 
on a long essay assignment, and you accidentally close the tab, along with the hours of hard work you've just written.

When this happened to me, I stumbled upon the above Reddit post and managed to recover the form inputs I had made. This post follows the same steps, but with slightly revised instructions and accompanying screenshots.

## Step 1
Download the HxD Hex Editor from https://mh-nexus.de/en/hxd/ (download the latest Win10 version)
![download page](https://cdn.hackclub.com/019d892e-5f45-73a6-ae7c-41ef2a14b7b5/paste-1776123010525.png)
- On the next page, click "Download per HTTPS" for your language

## Step 2
<Gallery 
  :images="[
    'https://cdn.hackclub.com/019d8933-4697-704b-b558-840ba29c3ad0/paste-1776123332021.png',
    'https://cdn.hackclub.com/019d893c-47da-7981-a2eb-53cbf2deafee/paste-1776123922179.png',
  ]" 
  :captions="[
    'Open HxD and go to Tools -> Open Main Memory',
    'You will see the following list of processes. Find the correct process ID corresponding to your browser tab in step 2.5',
  ]"
/>

## Step 2.5
Look up the steps for your specific browser to open "browser task manager" for your browser and locate your tab
<Gallery 
  :images="[
    'https://cdn.hackclub.com/019d8940-6da1-7fcc-8974-10b29d32a032/paste-1776124193918.png',
    'https://cdn.hackclub.com/019d8945-0739-712c-981b-ac517149142b/paste-1776124495543.png',
  ]" 
  :captions="[
    'In MS Edge and Chrome, use the hamburger menu',
    'Search for the name of your browser tab and cross-reference the process ID with the list of processes in HxD, then click OK',
  ]"
/>

## Step 3
<Gallery
  :images="[
	'https://cdn.hackclub.com/019d893c-88da-7239-9e1a-4d2cda9ac02e/paste-1776123938735.png',
	'https://cdn.hackclub.com/019d893d-a5e9-76cf-ab6d-1f8fe67169f1/paste-1776124011791.png',
	'https://cdn.hackclub.com/019d893e-91d9-7162-8818-47fdfdd7eb20/paste-1776124072201.png',
	'https://cdn.hackclub.com/019d893f-2ad9-7196-bbaf-062f4aa540e6/paste-1776124111207.png',
  ]"
  :captions="[
	'HxD will load the RAM memory of that browser tab. Go open the search function',
	'Type a few words you remember typing in the form, and make sure to select `All` in the search options. Click OK',
	'You should see a list of search results highlighted. If your result does not appear, press F3 to cycle to the next instance of your search term. If you get no results, try shortening your search term to just one or two words.',
	'Once you find the correct search result, you can select it and copy the text. You may have to do some formatting to get it back to how it was. If some parts of your text are missing, you may have to keep repeating the search process.',
  ]"
/>

## Step 4
Doesn't that final result from HxD look familiar to the text we deleted?
![original](https://cdn.hackclub.com/019d8938-5969-7863-9626-db40d3d45510/paste-1776123664340.png)