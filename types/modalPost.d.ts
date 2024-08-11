interface IPostData {
  title: string;
  description: string;
  columnId: number;
  assigneeUserId?: number | null;
  tags?: string[];
  dueDate?: string | null;
  imageUrl?: string | null;
}
