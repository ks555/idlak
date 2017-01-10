[![Build Status](https://travis-ci.org/Idlak/idlak.svg?branch=master)]
(https://travis-ci.org/Idlak/idlak)

Idlak Speech Synthesis Toolkit
================================

This is the official Idlak readme. This is a fork of [the ASR toolkit Kaldi] (https://github.com/kaldi-asr/kaldi), with various tools and examples added to make it suitable for Text-to-Speech.

Idlak is a project to build an end-to-end parametric TTS
system within Kaldi, to be distributed with the same Apache 2 licence.
It contains a robust front-end, voice building tools, speech analysis
utilities, and DNN tools suitable for parametric synthesis. It also contains
an example of using Idlak as an end-to-end TTS system, in egs/tts_dnn_arctic/s1

Note that the kaldi structure has been maintained and the tool building
procedure is identical.

I assume that the reader would like to (1) build the toolkit
and (2) run the example system builds.

To build the toolkit: see `./INSTALL`.  These instructions are valid for UNIX
systems including various flavors of Linux; Darwin; and Cygwin (has not been
tested on more "exotic" varieties of UNIX).  For Windows installation
instructions (excluding Cygwin), see `windows/INSTALL`.

The documentation should be build separately, cf. src/doc/README.
Normally this documentation
is generated by running "doxygen" from the src/ directory,
and appears in src/html/

To run the example system builds, see `egs/README.txt`.

If you are reading this, you probably want to build the "Tangle" demo, which
is located egs/tts_dnn_arctic/s1.

If you encounter problems (and you probably will), please do not hesitate to
contact the developers (see below). In addition to specific questions, please
let us know if there are specific aspects of the project that you feel could be
improved, that you find confusing, etc., and which missing features you most
wish it had.

Idlak/Kaldi information channels
--------------------------

Most of Idlak specific bug / features request should be put as "Issues" using the github
bug tracking system. Usage questions should be directed to the kaldi-help mailing list,
please see below.

For HOT news about Kaldi see [the project site](http://kaldi-asr.org/).

[Documentation of Kaldi](http://kaldi-asr.org/doc/):
- Info about the project, description of techniques, tutorial for C++ coding.
- Doxygen reference of the C++ code.

[Kaldi forums and mailing lists](http://kaldi-asr.org/forums.html):

We have two different lists
- User list kaldi-help
- Developer list kaldi-developers:

To sign up to any of those mailing lists, go to
[http://kaldi-asr.org/forums.html](http://kaldi-asr.org/forums.html):


Development pattern for contributors
------------------------------------

1. [Create a personal fork](https://help.github.com/articles/fork-a-repo/)
   of the [main Kaldi repository] (https://github.com/kaldi-asr/kaldi) in GitHub.
2. Make your changes in a named branch different from `master`, e.g. you create
   a branch `my-awesome-feature`.
3. [Generate a pull request](https://help.github.com/articles/creating-a-pull-request/)
   through the Web interface of GitHub.
4. As a general rule, please follow [Google C++ Style Guide]
   (https://google.github.io/styleguide/cppguide.html).
   There are a [few exceptions in Kaldi](http://kaldi-asr.org/doc/style.html).
   You can use the [Google's cpplint.py]
   (https://raw.githubusercontent.com/google/styleguide/gh-pages/cpplint/cpplint.py)
   to verify that your code is free of basic mistakes.

Platform specific notes
-----------------------

PowerPC 64bits little-endian (ppc64le):
- Kaldi is expected to work out of the box in RHEL >= 7 and Ubuntu >= 16.04 with
  OpenBLAS, ATLAS, or CUDA.
- CUDA drivers for ppc64le can be found at [https://developer.nvidia.com/cuda-downloads]
  (https://developer.nvidia.com/cuda-downloads).
- An [IBM Redbook] (https://www.redbooks.ibm.com/abstracts/redp5169.html) is
  available as a guide to install and configure CUDA.
