export const snippetCategories = [
  "Default", "Personal", "Algorithmic"
] as const

export type SnippetCategory = (typeof snippetCategories)[number]

export interface Snippet<Type = string> {
  name: string,
  type: Type,
  description?: string,
  code: string,
}

export const snippets: Snippet<SnippetCategory>[] = [
  {
    name: "Hello World",
    description: "Basic Hello World application.",
    code: "" +
      "fun main(args: Array<String>) {\n" +
      "\tprintln(\"Hello ${args.first()}\")\n" +
      "}"
    ,
    type: "Default",
  },
  {
    name: "Coroutines",
    description: "Basic Hello World application.",
    code: "" +
      "import kotlinx.coroutines.*\n" +
      "\n" +
      "fun main() = runBlocking {\n" +
      "    launch {\n" +
      "        delay(100)\n" +
      "        println(\"Hello from coroutine!\")\n" +
      "    }\n" +
      "    println(\"Hello from main thread!\")\n" +
      "}\n"
    ,
    type: "Default",
  },
  {
    name: "Binary Search",
    description: "Searches for a value in a sorted array by repeatedly dividing the search interval in half.",
    code: "" +
      "fun binarySearch(array: IntArray, target: Int): Int {\n" +
      "    var left = 0\n" +
      "    var right = array.size - 1\n" +
      "\n" +
      "    while (left <= right) {\n" +
      "        val mid = left + (right - left) / 2 // Prevents overflow\n" +
      "\n" +
      "        when {\n" +
      "            array[mid] == target -> return mid // Target found\n" +
      "            array[mid] < target -> left = mid + 1 // Target is to the right\n" +
      "            else -> right = mid - 1 // Target is to the left\n" +
      "        }\n" +
      "    }\n" +
      "\n" +
      "    return -1 // Target not found\n" +
      "}\n" +
      "\n" +
      "fun main(args: Array<String>) {\n" +
      "    val array = intArrayOf(1, 3, 5, 7, 9, 11, 13, 15, 17, 19)\n" +
      "    val target = args.firstOrNull()?.toIntOrNull() ?: 9\n" +
      "\n" +
      "    val result = binarySearch(array, target)\n" +
      "    if (result != -1) {\n" +
      "        println(\"Element found at index: $result\")\n" +
      "    } else {\n" +
      "        println(\"Element not found\")\n" +
      "    }\n" +
      "}\n",
    type: "Algorithmic",
  },
]
