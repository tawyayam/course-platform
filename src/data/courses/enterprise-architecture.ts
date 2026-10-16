import type { Course } from "@/types/course";
import coverImg from "@/assets/images/covers/course-2.webp";
import posterImg from "@/assets/images/poster.webp";
import avatar1 from "@/assets/images/avatar-1.webp";
import avatar2 from "@/assets/images/avatar-2.webp";
import avatar3 from "@/assets/images/avatar-3.webp";

export const enterpriseArchitectureCourse: Course = {
  id: "architecting-ultra-scalable-enterprise-distributed-microservices-ecosystems",
  slug:
    "architecting-ultra-scalable-enterprise-distributed-microservices-ecosystems",
  title:
    "Architecting Ultra-Scalable Enterprise Distributed Microservices Ecosystems with Modern Cloud Native Paradigms and Reactive Infrastructure",
  shortDescription:
    "A comprehensive deep-dive into high-throughput asynchronous message-driven backends, fault-tolerant consensus mechanisms, and resilient architectural blueprints for high-concurrency enterprise solutions.",
  instructor: "Prof. Alexander Maximilian Montgomery-Haverford III",
  cover: coverImg,
  poster: posterImg,
  progressPercent: 45,
  duration: "12 weeks",
  language: "English",
  enrolledCount: 342,
  currentLessonId: "long-l1",
  studentPercentile: 72,
  sections: [
    {
      id: "long-sec-1",
      title:
        "Deconstructing High-Throughput Event-Driven Streaming Data Pipelines and Reactive Processing Backbones",
      weekRange:
        "Week 1 to Week 6: Foundations of Distributed High-Performance Systems",
      description:
        "In-depth exploration of concurrent execution models, partitioned distributed logs, and backpressure handling strategies under heavy enterprise workloads.",
      lessons: [
        {
          id: "long-l1",
          title:
            "Comprehensive Investigation of Asynchronous Consensus Protocols in High-Latency Geo-Replicated Environments",
          type: "video",
          locked: false,
          videoSrc: "/media/videos/lesson-placeholder.mp4",
        },
        {
          id: "long-l2",
          title:
            "Architectural Patterns for Implementing Resilient Circuit Breakers and Graceful Degradation under Massive Traffic Spikes",
          type: "video",
          locked: true,
          videoSrc: "/media/videos/lesson-placeholder.mp4",
        },
        {
          id: "long-l3",
          title:
            "Technical Whitepaper on Fault-Tolerant Distributed Storage Topologies and Cross-Region Data Replication Guarantees",
          type: "pdf",
          locked: false,
          questionCount: 0,
          durationMinutes: 25,
          pdfSrc: "/media/course-overview.pdf",
        },
      ],
    },
    {
      id: "long-sec-2",
      title:
        "Advanced Observability, Distributed Tracing, and Automated Autonomous Healing Systems for Resilient Infrastructure",
      weekRange:
        "Week 7 to Week 12: Production-Grade Site Reliability Engineering",
      description:
        "Mastering telemetry data collection, synthetic load generation, and anomaly detection algorithms for self-healing Kubernetes clusters.",
      lessons: [
        {
          id: "long-l4",
          title:
            "Comprehensive Diagnostic Procedures for Memory Leaks and Event Loop Latency Spikes in Production Services",
          type: "video",
          locked: true,
          videoSrc: "/media/videos/lesson-placeholder.mp4",
        },
        {
          id: "long-l5",
          title:
            "Comprehensive Capstone Examination on Cloud-Native Enterprise Systems Architecture and Resilience Engineering",
          type: "exam",
          locked: false,
          questionCount: 5,
          durationMinutes: 30,
          examId: "exam-long",
        },
      ],
    },
  ],
  comments: [
    {
      id: "comment-ea-1",
      author: "Dr. Jonathan Vance-Sterling",
      dateISO: "2021-11-04T10:00:00.000Z",
      text: "The thoroughness of the distributed consensus breakdown exceeded expectations.",
      avatar: avatar1,
    },
    {
      id: "comment-ea-2",
      author: "Helena Rostova",
      dateISO: "2021-11-12T14:30:00.000Z",
      text: "Exceptional real-world benchmarks on backpressure handling in high-throughput clusters.",
      avatar: avatar2,
    },
    {
      id: "comment-ea-3",
      author: "Marcus Thorne",
      dateISO: "2021-11-20T09:15:00.000Z",
      text: "The architectural patterns discussed here are directly applicable to enterprise migrations.",
      avatar: avatar3,
    },
  ],
  leaderboard: [
    { id: "lead-ea-1", name: "Helena Rostova", points: 3100, avatar: avatar2 },
    {
      id: "lead-ea-2",
      name: "Jonathan Vance-Sterling",
      points: 2980,
      avatar: avatar1,
    },
    {
      id: "lead-ea-3",
      name: "Alex Morgan",
      points: 2840,
      avatar: avatar3,
      isCurrentUser: true,
    },
    { id: "lead-ea-4", name: "Marcus Thorne", points: 2710, avatar: avatar1 },
    { id: "lead-ea-5", name: "Claire Dupont", points: 2600, avatar: avatar2 },
    { id: "lead-ea-6", name: "Nathan Drake", points: 2490, avatar: avatar3 },
  ],
  exams: [
    {
      id: "exam-long",
      title: "Distributed Systems Architecture Certification Exam",
      durationSeconds: 1800,
      questions: [
        {
          id: "eq1",
          text: "Which theorem states that a distributed data store can only provide two of Consistency, Availability, and Partition tolerance?",
          options: [
            { id: "eo1-1", label: "CAP Theorem" },
            { id: "eo1-2", label: "PACELC Theorem" },
            { id: "eo1-3", label: "Amdahl's Law" },
            { id: "eo1-4", label: "Little's Law" },
          ],
          correctOptionId: "eo1-1",
        },
        {
          id: "eq2",
          text: "What consensus protocol is fundamentally utilized by etcd and Apache Kafka Raft metadata?",
          options: [
            { id: "eo2-1", label: "Paxos" },
            { id: "eo2-2", label: "Raft" },
            { id: "eo2-3", label: "Zab" },
            { id: "eo2-4", label: "Gossip" },
          ],
          correctOptionId: "eo2-2",
        },
        {
          id: "eq3",
          text: "In event-driven architectures, what does idempotency guarantee for consumers?",
          options: [
            { id: "eo3-1", label: "Lower memory consumption" },
            {
              id: "eo3-2",
              label: "Identical result regardless of message delivery count",
            },
            { id: "eo3-3", label: "Strict FIFO order across partitions" },
            { id: "eo3-4", label: "Synchronous acknowledgment" },
          ],
          correctOptionId: "eo3-2",
        },
        {
          id: "eq4",
          text: "Which architectural pattern mitigates cascading failures by opening when fault thresholds are met?",
          options: [
            { id: "eo4-1", label: "Saga Pattern" },
            { id: "eo4-2", label: "Circuit Breaker" },
            { id: "eo4-3", label: "Outbox Pattern" },
            { id: "eo4-4", label: "Event Sourcing" },
          ],
          correctOptionId: "eo4-2",
        },
        {
          id: "eq5",
          text: "What observability pillar is best suited for tracking request latency across microservices?",
          options: [
            { id: "eo5-1", label: "Structured Logging" },
            { id: "eo5-2", label: "Counter Metrics" },
            { id: "eo5-3", label: "Distributed Tracing" },
            { id: "eo5-4", label: "Crash Dumps" },
          ],
          correctOptionId: "eo5-3",
        },
      ],
    },
  ],
};
