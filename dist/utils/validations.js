/**
 * Validates the application name.
 * @param {string} appName - The name of the app.
 * @returns {string | null} - Returns an error message if invalid, otherwise null.
 */
export function validateInput(appName) {
  var invalidNamePattern = /^(basebuild|buildbase|basebuildcli|buildbasecli|bbcli|base-build-cli|build-base-cli|basebuild-cli|buildbase-cli|cli-basebuild|cli-base-build|baseBuild|BuildBase|baseBuildCli|BuildBaseCli|base-build|build-base)$/i;
  if (invalidNamePattern.test(appName)) {
    return "Hey, that's my recipe name! Please name your recipe something other than '".concat(appName, "'.");
  }
  if (/^\d+$/.test(appName)) {
    return 'The app name cannot contain only numbers.';
  }
  if (!/^[a-zA-Z][a-zA-Z0-9_-]*$/.test(appName)) {
    return 'The app name must start with a letter and contain only letters, numbers, hyphens (-), or underscores (_).';
  }
  return null; // Valid input
}

/**
 * Validates the bundle identifier.
 * @param {string} bundleId - The bundle ID to validate.
 * @returns {string | null} - Returns an error message if invalid, otherwise null.
 */
export function validateBundleId(bundleId) {
  var trimmedId = bundleId.trim();
  if (!trimmedId) {
    return 'Bundle ID cannot be empty.';
  }
  var idSegments = trimmedId.split(".");
  var bundleIdPattern = /^([a-zA-Z]([a-zA-Z0-9_-]*)\.)+[a-zA-Z]([a-zA-Z0-9_-]*)$/;
  if (idSegments.length < 2) {
    return 'Invalid Bundle Identifier. Use a format like "com.travelapp" or "com.mycompany.travelapp".';
  }
  if (!bundleIdPattern.test(trimmedId)) {
    return "Invalid Bundle Identifier. It must have at least two segments separated by dots. Each segment must start with a letter, and all characters must be alphanumeric, hyphens (-), or underscores (_).";
  }
  return null; // Valid bundle ID
}