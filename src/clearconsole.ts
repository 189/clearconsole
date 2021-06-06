/**
 * clear console
 */
export default function clearConsole() {
  process.stdout.write("\x1B[2J\x1B[0f");
}
