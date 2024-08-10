interface IPostData {
    title: string;
    description: string;
    columnId: number;
    assigneeUserId?: number;
    tags?: string[];
    dueDate?: string | null;
    imageUrl?: string | null;
  }