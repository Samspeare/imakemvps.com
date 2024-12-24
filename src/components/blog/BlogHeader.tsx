import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface BlogHeaderProps {
  categories: string[];
  tags: string[];
  selectedCategory: string;
  selectedTag: string;
  onCategoryChange: (value: string) => void;
  onTagChange: (value: string) => void;
}

const BlogHeader = ({
  categories,
  tags,
  selectedCategory,
  selectedTag,
  onCategoryChange,
  onTagChange,
}: BlogHeaderProps) => {
  return (
    <div className="text-center mb-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
      <p className="text-xl text-gray-600 mb-8">
        Insights and updates from our team
      </p>

      <div className="flex justify-center gap-4 mb-8">
        <Select value={selectedCategory} onValueChange={onCategoryChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={selectedTag} onValueChange={onTagChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by tag" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Tags</SelectItem>
            {tags.map((tag) => (
              <SelectItem key={tag} value={tag}>
                {tag}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default BlogHeader;