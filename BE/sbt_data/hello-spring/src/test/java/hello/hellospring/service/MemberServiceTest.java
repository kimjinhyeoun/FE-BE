package hello.hellospring.service;

import hello.hellospring.domain.Member;
import hello.hellospring.repository.MemberRepository;
import hello.hellospring.repository.MemoryMemberRepository;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Commit;
import org.springframework.transaction.annotation.Transactional;

import static org.assertj.core.api.Assertions.*;
import static org.assertj.core.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@Transactional
class MemberServiceIntegrationTest {
    @Autowired
    MemberService memberService;
    @Autowired
    MemoryMemberRepository memberRepository;

    @BeforeEach
    public void beforeEach(){
        memberRepository = new MemoryMemberRepository();
        memberService = new MemberService(memberRepository);
    }
    /*@AfterEach
    public void afterEach(){
        memberRepository.cleastore();
    }*/


    @Test
    public void valid_exception(){
        //given
        Member member1 = new Member();
        member1.setName("spring");

        Member member2 = new Member();
        member2.setName("spring");
        //when
        memberService.join(member1);
        try {
            memberService.join(member2);
            fail();
        }catch (IllegalStateException e){
            assertThat(e.getMessage()).isEqualTo("이미 존재하는 회원입니다.");
        }
        //then
    }
    @Test
    @Commit
    void join(){
        //given - 준비
        Member member = new Member();
        member.setName("spring");

        //when - 실행
        Long saveId = memberService.join(member);

        //then - 검증
        Member findMember = memberService.findOne(saveId).get();
        assertThat(member.getName()).isEqualTo(findMember.getName());
    }
    @Test
    void findMembers(){

    }
    @Test
    void findOne(){

    }
}