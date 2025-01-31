import fs from 'fs/promises';
import { readdirSync, existsSync, rmSync } from 'fs';

/**
 * Writes content to a file asynchronously.
 * @param {string} filePath - The path of the file to write.
 * @param {string} content - The content to write to the file.
 */
export var writeFileAsync = function writeFileAsync(filePath, content) {
  return fs.writeFile(filePath, content, 'utf8');
};

/**
 * Deletes a directory recursively if it exists.
 * @param {string} dirPath - Path to the directory.
 * @returns {boolean} - Returns true if deleted, otherwise false.
 */
export var deleteDirectory = function deleteDirectory(dirPath) {
  if (existsSync(dirPath)) {
    rmSync(dirPath, {
      recursive: true,
      force: true
    });
    return true;
  }
  return false;
};

/**
 * Reads configuration files from the specified directory.
 * @param {string} configsDir - Path to the configurations directory.
 * @returns {string[]} - List of JavaScript config files.
 */
export var readConfigFiles = function readConfigFiles(configsDir) {
  return readdirSync(configsDir).filter(function (file) {
    return file.endsWith('.js');
  });
};

/**
 * Copies a file from source to target.
 * @param {string} sourcePath - Source file path.
 * @param {string} targetPath - Target file path.
 */
export var copyPasteFile = function copyPasteFile(sourcePath, targetPath) {
  return fs.copyFile(sourcePath, targetPath);
};

/**
 * Creates a directory (including parent directories if needed).
 * @param {string} dirPath - Directory path to create.
 */
export var createDirectory = function createDirectory(dirPath) {
  return fs.mkdir(dirPath, {
    recursive: true
  });
};

/**
 * Reads the contents of a directory.
 * @param {string} dirPath - Directory path.
 * @returns {Promise<fs.Dirent[]>} - Array of directory entries.
 */
export var readDirectory = function readDirectory(dirPath) {
  return fs.readdir(dirPath, {
    withFileTypes: true
  });
};

/**
 * Reads the contents of a file as a string.
 * @param {string} filePath - Path to the file.
 * @returns {Promise<string>} - File content.
 */
export var readFile = function readFile(filePath) {
  return fs.readFile(filePath, 'utf-8');
};

/**
 * Checks if a file is accessible.
 * @param {string} filePath - Path to the file.
 * @returns {Promise<void>} - Resolves if accessible, rejects otherwise.
 */
export var accessFile = function accessFile(filePath) {
  return fs.access(filePath);
};

/**
 * Deletes a file.
 * @param {string} filePath - Path to the file.
 */
export var deleteFile = function deleteFile(filePath) {
  return fs.unlink(filePath);
};

/**
 * Renames or moves a file from source to target.
 * @param {string} sourcePath - Source file path.
 * @param {string} targetPath - Target file path.
 */
export var renameFile = function renameFile(sourcePath, targetPath) {
  return fs.rename(sourcePath, targetPath);
};