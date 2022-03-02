import { ComponentWrapper } from "@styles/common.style"
import { DeveloperComponent } from "@styles/developer.style"
import {  NavContainer, NavForm, NavSubTitle, NavTitle, NavWrapper } from "@styles/nav.style"

function Developer () {
  return (
    <ComponentWrapper>
      <NavWrapper>
        <NavContainer>
          <NavForm>
            <NavTitle>Study</NavTitle>
            <NavSubTitle curLink='notice'>스터디 모집</NavSubTitle>
            <NavSubTitle curLink='notice'>토론</NavSubTitle>
            <NavSubTitle curLink='notice'>자유주제</NavSubTitle>
          </NavForm>
        </NavContainer>
        <DeveloperComponent>
          component
        </DeveloperComponent>
      </NavWrapper>
    </ComponentWrapper>
  )
}

export default Developer