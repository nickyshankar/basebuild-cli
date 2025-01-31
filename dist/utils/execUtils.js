import { exec } from 'child_process';

/**
 * Executes a shell command asynchronously.
 * @param {string} command - The command to execute.
 * @returns {Promise<string>} - Resolves with stdout, rejects with stderr.
 */
export function execAsync(command) {
  return new Promise(function (resolve, reject) {
    exec(command, function (error, stdout, stderr) {
      if (error) {
        reject(new Error(stderr.trim() || error.message));
        return;
      }
      resolve(stdout.trim());
    });
  });
}