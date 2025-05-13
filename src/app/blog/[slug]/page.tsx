'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Heading } from '@/components/ui/heading';
import { Content } from '@/components/ui/content';

// Sample blog post data (in real app, this would be fetched from an API or CMS)
const blogPostsData = {
  'the-future-of-ai-in-business': {
    title: 'The Future of AI in Business',
    date: 'June 15, 2024',
    author: 'John Smith',
    category: 'Technology',
    content: `
      <p>Artificial Intelligence (AI) is revolutionizing the way businesses operate across all industries. From automating routine tasks to providing deep insights from data analysis, AI is becoming an indispensable tool for companies looking to stay competitive in the digital age.</p>
      
      <h3>The Current State of AI in Business</h3>
      <p>Today, businesses are implementing AI in various ways:</p>
      <ul>
        <li><strong>Customer Service</strong>: Chatbots and virtual assistants are handling customer inquiries, providing 24/7 support.</li>
        <li><strong>Data Analysis</strong>: AI algorithms are processing vast amounts of data to identify patterns and trends that would be impossible for humans to detect.</li>
        <li><strong>Process Automation</strong>: Routine tasks are being automated, freeing up human workers to focus on more creative and strategic activities.</li>
        <li><strong>Personalization</strong>: AI is enabling businesses to offer highly personalized experiences to customers based on their preferences and behavior.</li>
      </ul>
      
      <h3>The Future of AI in Business</h3>
      <p>Looking ahead, we can expect AI to become even more integrated into business operations:</p>
      <ul>
        <li><strong>Predictive Analytics</strong>: AI will become more sophisticated in predicting market trends, customer behavior, and business outcomes.</li>
        <li><strong>Enhanced Decision Making</strong>: AI systems will provide more nuanced recommendations to support complex business decisions.</li>
        <li><strong>Autonomous Systems</strong>: More business processes will be fully automated, with AI systems capable of adapting to changing conditions.</li>
        <li><strong>Human-AI Collaboration</strong>: We'll see more effective partnerships between human workers and AI systems, leveraging the strengths of both.</li>
      </ul>
      
      <h3>Preparing for the AI-Driven Future</h3>
      <p>For businesses to thrive in the AI-driven future, they should:</p>
      <ol>
        <li>Invest in building AI capabilities, either through hiring talent or partnering with AI solution providers.</li>
        <li>Focus on data quality and governance, as AI systems are only as good as the data they're trained on.</li>
        <li>Consider the ethical implications of AI implementation and develop responsible AI practices.</li>
        <li>Train employees to work effectively with AI systems and to develop skills that complement AI capabilities.</li>
      </ol>
      
      <p>The future of business is undoubtedly intertwined with AI. Companies that embrace this technology thoughtfully and strategically will be better positioned to succeed in an increasingly competitive and complex business environment.</p>
    `,
    relatedPosts: ['mastering-devops-practices', 'securing-your-cloud-infrastructure']
  },
  // Add more blog posts as needed
};

export default function BlogPost() {
  const params = useParams();
  const slug = typeof params.slug === 'string' ? params.slug : '';
  
  // Get blog post data or use defaults if not found
  const post = blogPostsData[slug as keyof typeof blogPostsData] || {
    title: slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' '),
    date: 'Publication date',
    author: 'Author',
    category: 'Category',
    content: '<p>This blog post is currently unavailable or being updated.</p>',
    relatedPosts: []
  };

  return (
    <main className="container py-8 px-4 mx-auto">
      <Link href="/blog" className="text-blue-600 hover:underline mb-4 inline-block">
        &larr; Back to Blog
      </Link>
      
      <article className="max-w-4xl mx-auto">
        <Heading className="mb-2">{post.title}</Heading>
        
        <div className="flex items-center text-gray-500 mb-8">
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>{post.author}</span>
          <span className="mx-2">•</span>
          <span>{post.category}</span>
        </div>
        
        <Content className="prose max-w-none mb-8">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </Content>
        
        {post.relatedPosts && post.relatedPosts.length > 0 && (
          <div className="border-t pt-8 mt-8">
            <h3 className="text-xl font-bold mb-4">Related Posts</h3>
            <div className="flex flex-col space-y-2">
              {post.relatedPosts.map((relatedSlug) => (
                <Link 
                  key={relatedSlug}
                  href={`/blog/${relatedSlug}`}
                  className="text-blue-600 hover:underline"
                >
                  {relatedSlug
  .split('-')
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(' ')
}
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </main>
  );
} 