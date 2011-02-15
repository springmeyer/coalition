#!/bin/sh

# https://github.com/senchalabs/spark
spark -p 3000 -n `sysctl hw.ncpu | awk '{print $2}'`