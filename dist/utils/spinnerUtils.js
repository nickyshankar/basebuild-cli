import cliSpinners from 'cli-spinners';
import chalk from 'chalk';
var spinner = cliSpinners.dots; // Default spinner
var frameIndex = 0;
var interval;

/**
 * Starts a CLI spinner with the given message.
 * @param {string} message - The message to display alongside the spinner.
 */
export var startSpinner = function startSpinner(message) {
  if (interval) clearInterval(interval); // Ensure no duplicate spinners

  interval = setInterval(function () {
    var frame = spinner.frames[frameIndex];
    process.stdout.write("\r".concat(chalk.cyan(frame), " ").concat(chalk.white(message)));
    frameIndex = (frameIndex + 1) % spinner.frames.length;
  }, spinner.interval);
};

/**
 * Stops the spinner and displays a final status message.
 * @param {'success' | 'info' | 'warning' | 'error'} status - The status type.
 * @param {string} message - The message to display after stopping the spinner.
 */
export var stopSpinner = function stopSpinner(status, message) {
  if (interval) clearInterval(interval);
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  var statusSymbols = {
    success: '✅',
    info: '📢',
    warning: '❗',
    error: '❌'
  };
  console.log("".concat(statusSymbols[status] || 'ℹ️', " ").concat(chalk.white(message)));
};