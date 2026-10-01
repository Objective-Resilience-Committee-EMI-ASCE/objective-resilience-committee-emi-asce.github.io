---
# ============================================================
# OBJECTIVE RESILIENCE COMMITTEE (ASCE EMI)
# CASE STUDY / BENCHMARK PROBLEM SUBMISSION TEMPLATE
# ============================================================
# Copy this file to src/content/docs/entries/your-case-name.md
# (lowercase, no spaces), fill in every field, and open a pull request.
#
# If a field genuinely does not apply, write "N/A" rather than deleting it.
# Fields/sections marked [Benchmark emphasis] matter most if your submission
# type includes "Benchmark Problem"; [Case Study emphasis] if it includes "Case Study".
# Lines starting with # are comments and can stay or go.

title: ""                        # Full descriptive title of the submission

authors:                         # One entry per author; add/remove as needed
  - name: ""
    affiliation: ""
    emi_member: false            # true if this author is an EMI / ORC member (at least one author must be)

category: ""                     # Choose ONE (copy exactly):
                                 #   "1 - Independent systems"
                                 #   "2 - Networked and interdependent systems"
                                 #   "3 - Socio-technical resilience"

subcategory: ""                  # Choose ONE from the list for your category (copy exactly):
                                 #
                                 # Category 1:
                                 #   "Building" | "Bridge" | "Industrial facility" |
                                 #   "Critical facility" | "Other"
                                 #
                                 # Category 2:
                                 #   "Utility system (power, water, gas, telecom)" |
                                 #   "Transportation network (single- or multi-modal)" |
                                 #   "Cross-sector interdependent lifelines"
                                 #
                                 # Category 3:
                                 #   "Human-centered resilience of individual facilities" |
                                 #   "Community-scale resilience" |
                                 #   "Network and interdependent socio-technical systems"

asset_scale: "N/A"               # CATEGORY 1 ONLY: "Single asset" or "Portfolio".
                                 # Leave "N/A" for Category 2 or 3.

submission_type: []              # One or more of: "Case Study", "Benchmark Problem"

application_purpose: []          # One or more of:
                                 #   "Assessment"
                                 #   "Intervention Strategy Design"
                                 #   "Policy / Decision Evaluation"

hazards: []                      # e.g. ["Seismic", "Hurricane wind", "Flood", "Multi-hazard"]

time_horizon: ""                 # Recovery/analysis window considered, e.g.
                                 # "72-hour emergency response" or "10-year recovery horizon"

keywords: []                     # 3-6 keywords for search

figure: ""                       # REQUIRED. One figure of the system or of the results, shown on the home page.
                                 # Upload it to public/images/your-file-name/ and write its path, e.g.
                                 # "/images/your-file-name/figure.png"

date_added: 2026-01-01           # Submission date, YYYY-MM-DD (the newest entries appear first on the home page)

dataset_links:                   # Links to public repositories hosting the data needed to
  - ""                           # reproduce this problem (GitHub, DesignSafe Data Depot, ...).
                                 # If data cannot be fully shared, do NOT leave this blank:
                                 # state what CAN be shared and under what conditions, e.g.
                                 # "Network topology available on request; raw SCADA data
                                 # restricted under utility partner agreement."

citation:                        # OPTIONAL. References you want people to cite if they use
  - ""                           # your data or methods. One per line, any format. Shown in a
                                 # box at the bottom of the page. Use [] to leave it out.
---

## General Description

![Caption: describe the figure](/images/your-file-name/figure.png)

<!--
  Abstract-style summary (suggested 150-300 words) plus one illustrative
  figure: the same file you set in `figure:` above, shown here by the image
  line above (replace the path and caption). IMPORTANT: explicitly describe
  the SYSTEM BOUNDARY here (what is included/excluded) - there is no
  separate field for it.
-->


## Methods
<!--
  Describe the engineering mechanics and analysis approach, including which
  objective resilience framework and/or metric(s) were applied (the
  committee's definitions/metrics, a specific version of them, or a custom
  adaptation).
-->


## Input Data
<!--
  [Benchmark emphasis] List and describe all input data required to run the
  models (hazard data, fragility/vulnerability data, asset/network
  inventories, demographic data, etc.) in enough detail that someone could
  reconstruct the problem using this section together with dataset_links.
-->


## Assumptions
<!-- Brief, bulleted list of important modeling assumptions. -->
-
-

## Time Horizon
<!-- Optional elaboration on the time_horizon value above, if needed. -->


## Results
<!--
  [Case Study emphasis] Summary of the Objective Resilience metric(s)
  computed, with key figures/tables. For a pure benchmark problem with no completed
  analysis yet, write "N/A - reserved for future application of this benchmark problem."
-->


## Limitations
<!--
  Open weaknesses, caveats, or boundary conditions the authors themselves
  flag. Distinct from Assumptions: this is what you know is incomplete or
  uncertain, not what went into the model.
-->


## Practical Applications
<!--
  Broader implications: how can practitioners, researchers, or policymakers
  use this case study or benchmark problem? What decisions could it inform?
-->
